<template>
    <div class="todo-page">
        <h2>Shopping List <router-link  v-bind:to="'/detail'"><b-button variant="primary" style="float:right;margin-right: 10px;">Create</b-button></router-link></h2>
        <hr>
        <div class="shop-list">
            <b-row>
                <b-col sm="6" md="4" v-for="item in items">
                    <b-card
                        :title="item.title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >   
                        <b-card-text>
                            <p>{{ item.description }}</p>
                        </b-card-text>
                        <b-button variant="danger" style="float:right" @click="removeFromData(item)">Delete</b-button>
                        <router-link :to="{ name: 'detail', params: {propitem : item} }"><b-button variant="primary" style="float:right;margin-right: 10px;">View</b-button></router-link>        
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import axios from "axios";
    export default{
        name: 'ShopList',
        data() {
            return {
                itemList: []
            }
        },
        computed: {
            ...mapState([
            'items'
            ])
        },
        methods: {
            removeFromData(item) {
                axios
                    .delete(`http://localhost:3000/shoplist/${item.id}`)
                    .then(() => {
                        this.$store.commit("removeItem", item)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                 },
        }
        
    }
</script>