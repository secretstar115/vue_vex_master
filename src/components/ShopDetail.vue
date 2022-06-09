<template>
    <div class="todo-page">
        <h2>Shopping detail<b-button variant="primary" v-if="!propitem" style="float:right" @click="addNewItem">Save</b-button>
            <b-button variant="primary" v-if="propitem" style="float:right" @click="updateItem">Update</b-button>
        </h2>
        <hr>
        <div class="shop-list">
            <b-form-group
                id="fieldset-1"
                label="Enter Title"
                label-for="input-1"
                valid-feedback="Thank you!"
            >
                <b-form-input id="input-1" v-model="item.title"  placeholder="Enter title..." trim></b-form-input>
            </b-form-group>
            <b-form-group
                id="fieldset-2"
                label="Enter Description"
                label-for="textarea"
                valid-feedback="Thank you!"
            >
                <b-form-textarea id="textarea" v-model="item.description" placeholder="Enter description..." rows="3" max-rows="6"></b-form-textarea>
            </b-form-group>
            <b-form-group
                id="fieldset-3"
                label="Select Image"
                label-for="input-1"
                valid-feedback="Thank you!"
            >
                <b-form-file  placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
            </b-form-group>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
    import axios from "axios";
    export default{
        name: 'ShopList',
        props: ['propitem'],
        data() {
            return {
                item: {
                    img: "https://picsum.photos/600/300/?image=25"
                },
            }
        },
        mounted() {
            if(this.propitem){
            this.getItemByID();
            }
        },
        methods: {
            ...mapActions([
                'addItem',
                'editItem',
            ]),
            getItemByID() {
                axios
                    .get(`http://localhost:3000/shoplist/${this.propitem.id}`)
                    .then((response) => {
                        //console.log(response.data);
                        this.item = response.data;
                    })
                    .catch((error) => {
                    console.log(error);
                    });
            },
            addNewItem() {
                axios
                    .post("http://localhost:3000/shoplist/", this.item)
                    .then((response) => {
                        console.log(response.data);
                        alert("success");
                        //this.$store.commit("removeItem", this.item)
                        this.addItem(this.item);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            updateItem(){
                console.log(this.item.title)
                axios
                    .put(`http://localhost:3000/shoplist/${this.propitem.id}`, this.item)
                    .then((response) => {
                        alert("success");
                        console.log(response.data);
                        this.editItem({ item:this.propitem, title: this.item.title });
                    })
                    .catch((error) => {
                    console.log(error);
                    });
            }
        }
        
    }
</script>