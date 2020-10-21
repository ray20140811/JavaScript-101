VUE
====

Reference
---------

* [Vue開發入門看這篇文章就夠了](https://www.mdeditor.tw/pl/2uZH/zh-tw)
* [網頁設計靠Vue.js轉前端 v-for](https://ithelp.ithome.com.tw/articles/10202408)
* [Vue.js學習筆記Day6 v-for](https://medium.com/pierceshih/vue-js-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-day6-v-for-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93-%E5%9F%BA%E7%A4%8E%E7%AF%87-79fb79d5fcb)
* [Vue.js:列表渲 染v-for](https://cythilya.github.io/2017/04/27/vue-list-rendering/)

Vuetify
=======

Reference
---------
* [Vuetify](https://vuetifyjs.com/en/)
* [Vuetify Usage With CDN](https://vuetifyjs.com/en/getting-started/installation/#usage-with-cdn)
* [Vuetify API](https://vuetifyjs.com/en/api/v-alert/)
* [Vuetify colors page](https://vuetifyjs.com/en/styles/colors/#material-colors)
* [Vuetify dark themes](https://material.io/design/color/dark-theme.html)

建立一個可用的首頁,範例請參考index.html

API 如何查看
-----------
1. v-alert, v-app, ...代表可以使用的標籤, 用法 <v-alert></v-alert>
2. 在v-alert第一個區塊是Props,代表可以添加在標籤內的Property. 用法:  <v-alert border="bottom"></v-alert>
3. Props的Name代表可用的屬性名,Type是類型,Default是預設值. 用法:  border="bottom"
4. 如果Type是boolean,則直接加上該Props,會給true. 用法: <v-alert dense></v-alert>
