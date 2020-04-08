import Vue from 'vue';
import VueStorage from 'vue-ls';
import config from '@/config/index';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'lib-flexible';

Vue.use(VueStorage, config.storageOptions);
Vue.use(Antd);
