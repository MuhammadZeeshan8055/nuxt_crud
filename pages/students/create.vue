<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h1>Add Student
                            <NuxtLink to="/students/list" class="btn btn-primary btn-sm float-end">Back</NuxtLink>
                        </h1>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="student.name" name="" id="" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" v-model="student.email" name="" id="" class="form-control">
                            </div>

                            <button type="button" v-on:click="addStudent()" class="btn btn-primary mt-3">Add Student</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name:"Create",
    data(){
        return{
            student:{
                name:'',
                email:''
            }
        }
    },
    methods:{
        async addStudent(){
            let result=await axios.post("http://127.0.0.1:8000/api/add_worker",{
                name:this.student.name,
                email:this.student.email
            });
            if(result.status==201){
                alert('Student Added Successfully');
                this.student.name = '';
                this.student.email = '';
            }
        }
    }

}
</script>