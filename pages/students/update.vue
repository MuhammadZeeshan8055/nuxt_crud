<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h1>Update Student
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

                            <button type="button" v-on:click="updateStudent()" class="btn btn-primary mt-3">Update Student</button>
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
    name:"UpdateComponent",

    data(){
        return{
            student:{
                name:'',
                email:'',
            }
        }
    },
    async mounted(){
        let result=await axios.get("http://127.0.0.1:8000/api/search/"+this.$route.params.id);
        console.log(result.data);
        this.student=result.data;
    },
    methods:{
        async updateStudent(){
            let result=await axios.put("http://127.0.0.1:8000/api/update/"+this.$route.params.id,{
                name:this.student.name,
                email:this.student.email,
            });
            if(result.status==200){
                alert('student Updated Successfully');
                this.$router.push({name:'Home'});

            }
        }
    }

}
</script>