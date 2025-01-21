/* eslint-disable @typescript-eslint/no-require-imports */

const { withDangerousMod, withPlugins } = require('@expo/config-plugins');
const { readFile, writeFile } = require('fs/promises');
const path = require('path');

/** @type {import('@expo/config-types').ExpoConfig} */
function withPodFile(config) {
  return withPlugins(config, [
    config => {
      return withDangerousMod(config, [
        'ios',
        async config => {
          const file = path.join(config.modRequest.platformProjectRoot, 'Podfile');

          const patch =
            '  post_install do |installer|\n' +
            '    installer.pods_project.targets.each do | target |\n' +
            '      target.build_configurations.each do | config |\n' +
            "        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '16.0'\n" +
            '      end\n' +
            '    end\n';

          const contents = (await readFile(file, { encoding: 'utf-8' })).replace(
            'post_install do |installer|\n',
            patch,
          );

          await writeFile(file, contents, { encoding: 'utf-8' });

          return config;
        },
      ]);
    },
  ]);
}

module.exports = withPodFile;
