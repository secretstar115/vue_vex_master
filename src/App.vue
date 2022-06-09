<template>
  <div id="app">
   <b-jumbotron  bg-variant="info" text-variant="white" style="padding:10px">
      <template slot="header">
        <b-container>Kanban</b-container>
      </template>
      <template slot="lead">
        <b-container><router-link  to="/" style="color:white">ShopList /</router-link></b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import axios from "axios";
  export default {
    name: 'TodoView',
    data() {
        return {
            itemList: []
        }
    },
    mounted() {
        this.getShoplistData();
    },
    methods: {
      ...mapActions([
          'addItem',
      ]),
      getShoplistData() {
          axios
            .get("http://localhost:3000/shoplist/")
            .then((response) => {
                this.itemList = response.data;
                for(var i=0;i<this.itemList.length;i++){
                    console.log(this.itemList[i].title);
                    this.addItem(this.itemList[i]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
      },
    }
  }
</script>

