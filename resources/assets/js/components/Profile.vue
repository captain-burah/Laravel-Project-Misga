<style>
.widget-user-header{
    background-position: center center;
    background-size: cover;
    height: 250px !important;
}

.card-footer{
    padding: 10px !important;
    margin: 2px !important;
}

</style>

<template>
    <div class="container">
        <div class="row ">
<!-----------------------------------------Profile Header-------------------------------------------------->
            <div class="col-md-12 mt-3  ">
                <div class="card card-widget widget-user">
                    <!-- Add the bg color to the header using any of the bg-* classes -->
                    <div class="widget-user-header text-white" style="background-image:url('./img/bg3-2.jpg')">
                        <h3 class="widget-user-username text-right">Elizabeth Pierce</h3>
                        <h5 class="widget-user-desc text-right">Student</h5>
                    </div>
                    <div class="widget-user-image">
                        <img class="img-circle" src="img/rocket.png" alt="User Avatar">
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-sm-4 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">3</h5>
                                    <span class="description-text">Courses Enrolled</span>
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-4 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">34</h5>
                                    <span class="description-text">Exams</span>
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-4">
                                <div class="description-block">
                                    <h5 class="description-header">35</h5>
                                    <span class="description-text">HomeWork</span>
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row ">
<!-----------------------------------------Profile Details-------------------------------------------------->
            <div class="col-md-12 mt-3">
                <div class="card">
    <!-----------------------------------------Buttons -------------------------------------------------->
                <div class="card-header p-2">
                    <ul class="nav nav-pills">
                    <li class="nav-item"><a class="nav-link" href="#" data-toggle="tab">Activity</a></li>

                    <li class="nav-item"><a class="nav-link active" href="#" data-toggle="tab">Settings</a></li>
                    </ul>
                </div><!-- /.card-header -->

                <div class="card-body">
    <!-----------------------------------------Activity tab-------------------------------------------------->
                    <div class="tab-content">
                        <div class="tab-pane" id="activity">
                            <!-- Post -->
                            <div class="post">
                            <div class="user-block">
                                <img class="img-circle img-bordered-sm" src="" alt="user image">
                                <span class="username">
                                    <a href="#">Jonathan Burke Jr.</a>
                                    <a href="#" class="float-right btn-tool">
                                        <i class="fas fa-times"></i>
                                    </a>
                                </span>
                                <span class="description">Shared publicly - 7:30 PM today</span>
                            </div>
                            <!-- /.user-block -->
                            <p>
                                Lorem ipsum represents a long-held tradition for designers,
                                typographers and the like. Some people hate it and argue for
                                its demise, but others ignore the hate as they create awesome
                                tools to help create filler text for everyone from bacon lovers
                                to Charlie Sheen fans.
                            </p>

                            <p>
                                <a href="#" class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a>
                                <a href="#" class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a>
                                <span class="float-right">
                                    <a href="#" class="link-black text-sm">
                                        <i class="far fa-comments mr-1"></i> Comments (5)
                                    </a>
                                </span>
                            </p>

                            <input class="form-control form-control-sm" type="text" placeholder="Type a comment">
                            </div>
                            <!-- /.post -->

                            <!-- Post -->
                            <div class="post clearfix">
                            <div class="user-block">
                                <img class="img-circle img-bordered-sm" src="" alt="User Image">
                                <span class="username">
                                    <a href="#">Sarah Ross</a>
                                    <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                                </span>
                                <span class="description">Sent you a message - 3 days ago</span>
                            </div>
                            <!-- /.user-block -->
                            <p>
                                Lorem ipsum represents a long-held tradition for designers,
                                typographers and the like. Some people hate it and argue for
                                its demise, but others ignore the hate as they create awesome
                                tools to help create filler text for everyone from bacon lovers
                                to Charlie Sheen fans.
                            </p>

                            <form class="form-horizontal">
                                <div class="input-group input-group-sm mb-0">
                                <input class="form-control form-control-sm" placeholder="Response">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-danger">Send</button>
                                </div>
                                </div>
                            </form>
                            </div>
                            <!-- /.post -->

                            <!-- Post -->
                            <div class="post">
                            <div class="user-block">
                                <img class="img-circle img-bordered-sm" src="" alt="User Image">
                                <span class="username">
                                    <a href="#">Adam Jones</a>
                                    <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                                </span>
                                <span class="description">Posted 5 photos - 5 days ago</span>
                            </div>
                            <!-- /.user-block -->
                            <div class="row mb-3">
                                <div class="col-sm-6">
                                <img class="img-fluid" src="" alt="Photo">
                                </div>
                                <!-- /.col -->
                                <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <img class="img-fluid mb-3" src="" alt="Photo">
                                        <img class="img-fluid" src="" alt="Photo">
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-sm-6">
                                        <img class="img-fluid mb-3" src="" alt="Photo">
                                        <img class="img-fluid" src="" alt="Photo">
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->

                            <p>
                                <a href="#" class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a>
                                <a href="#" class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a>
                                <span class="float-right">
                                    <a href="#" class="link-black text-sm">
                                        <i class="far fa-comments mr-1"></i> Comments (5)
                                    </a>
                                </span>
                            </p>

                            <input class="form-control form-control-sm" type="text" placeholder="Type a comment">
                            </div>
                            <!-- /.post -->
                        </div>
    <!-----------------------------------------Settings Tab-------------------------------------------------->
                        <div class="tab-pane active" id="settings">
                            <form @submit.prevent="updateStudent" class="form-horizontal">
                                <div class="form-group row">
                                    <label for="name" class="col-sm-2 col-form-label">Full Name</label>
                                    <div class="col-sm-10">
                                        <input v-model="form.name" type="text" name="name"
                                            placeholder="Full Name" autocomplete="current-name" class="form-control" 
                                            :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="name" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input v-model="form.email" type="text" name="email"
                                            placeholder="Email"
                                            class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>
                               
                                <div class="form-group row">
                                    <label for="contact" class="col-sm-2 col-form-label">Contact</label>
                                    <div class="col-sm-10">
                                        <input v-model="form.contact" type="tel" name="contact"
                                            placeholder="Contact"
                                            class="form-control" :class="{ 'is-invalid': form.errors.has('contact') }">
                                        <has-error :form="form" field="contact"></has-error>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="address" class="col-sm-2 col-form-label">Home Address</label>
                                    <div class="col-sm-10">
                                        <input v-model="form.address" type="text-area" name="address"
                                            placeholder="Address"
                                            class="form-control" :class="{ 'is-invalid': form.errors.has('address') }">
                                        <has-error :form="form" field="address"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input v-model="form.password" type="password" name="password" id="inputPassword"
                                            placeholder="Password" autocomplete="current-password"
                                            class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                        <has-error :form="form" field="password"></has-error>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-success">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.tab-content -->
                </div><!-- /.card-body -->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
    //------- OBJECTS--------------------------------------------------------------//
        data() {
            return {
                editmode: false,
                students : {},
                form: new Form({
                    id: '',
                    name : '',
                    
                    email : '',
                    contact : '',
                    address : '',
                    password : '',

                })
            }
        },
    //------ /OBJECTS--------------------------------------------------------------//
    //------- METHODS--------------------------------------------------------------//
        methods: {
            updateStudent(){
                this.$Progress.start();
                //console.log('Its Updating fine!');
                this.form.put('api/student/'+this.form.id)
                .then(() => {
                    $('#addNewStudent').modal('hide');
                    //success
                    swal.fire(
                        'Update!',
                        'Information has been updated.',
                        'success'
                    )
                    this.$Progress.finish();
                })
                .catch(() => {
                    this.$Progress.fail();
                    swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                        text: "Please note the form validations",
                    });
                });
            },
            editModal(student){
                this.editmode = true;
                this.form.reset();
                $('#addNewStudent').modal('show');
                this.form.fill(student);
            },

        },
    //------ /METHODS--------------------------------------------------------------//
    //------- FUNCTION--------------------------------------------------------------//

    //------ /FUNCTION--------------------------------------------------------------//
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
