/*
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-05 11:41:02
 */

import $ from 'jquery';


// var jsdom = require("jsdom"); 
// var $ = require("jquery")(jsdom.jsdom().parentWindow);
$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', 'lightblue')
})

//-----------------vue在webpack中用法
import Vue from 'vue'
//导入单文件组件
import App from './components/App.vue'

const vue = new Vue({

    el: '#app',
    render: h => h(App)




})