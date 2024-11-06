/* eslint-disable import/no-extraneous-dependencies */
import nodeConfig from '@pplancq/eslint-config/node';
import prettierConfig from '@pplancq/eslint-config/prettier';

// eslint-disable-next-line import/no-default-export
export default [...nodeConfig, ...prettierConfig];
