<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-">
                <div class="card">
                    <div class="card-header">
                        <h3>Student List
                            <NuxtLink to="/students/create" class="btn btn-primary btn-sm float-end">Add Student</NuxtLink>
                        </h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-responsive table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Brand Name</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr v-for="item in restaurant" :key="item.id">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td><NuxtLink :to="`/students/${item.id}`" class="btn btn-success btn-sm">Edit</NuxtLink>
                                    </td>
                                    <td><button v-on:click="confirmDelete(item.id)" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name:"list",
    data(){
        return{
           
            restaurant:[]
        }
    },
    methods:{
        confirmDelete(id) {
            const confirmed = confirm("Are you sure you want to delete this Student?");
            if (confirmed) {
                this.deleteRestaurant(id);
            }
        },
        async deleteRestaurant(id){
        let result=await axios.delete("http://127.0.0.1:8000/api/delete/"+id);
            if(result.status==200){
                this.loadRestaurant();
            }
       },
        async loadRestaurant(){
          
            let result=await axios.get("http://127.0.0.1:8000/api/workers");
            console.log(result);
            this.restaurant=result.data;
        }
    },
    mounted(){
       this.loadRestaurant();
    },
   

}
</script>
