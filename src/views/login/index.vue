<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="form" :rules="rules">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>
      <el-form-item prop="userName">
        <el-input ref="userName" v-model="form.userName" autocomplete="on" placeholder="用户名">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="大写锁定已开启" placement="right" manual>
        <el-form-item prop="password">
          <el-input ref="password" v-model="form.password" autocomplete="on" placeholder="密码" :type="hidePassword?'password':''" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            <span slot="suffix" @click="togglePasswordDisplaly">
              <svg-icon :icon-class="hidePassword ? 'eye' : 'eye-open'" />
            </span>
          </el-input>
        </el-form-item>
      </el-tooltip>
      <el-button :loading="loading" type="primary" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            capsTooltip: false,
            hidePassword: true,
            loading:false,
            redirect:'',
            queryParams:{},
            form: {
                userName: 'admin',
                password: '123'
            },
            rules:{
                userName:[{required:true,trigger:'blur',message:'用户名不能为空'}],
                password:[{required:true,trigger:'blur',message:'密码不能为空'}]
            }
        }
    },
    watch: {
        $route: {
            handler: function(route) { 
                const query = route.query
                if (query) {
                    this.redirect = query.redirect
                    this.queryParams = this.getQueryParams(query)
                }
            },
            immediate: true
        }
    },
    mounted() {
        if (this.form.username === '') {
            this.$refs.userName.focus()
        } else if (this.form.password === '') {
            this.$refs.password.focus()
        }
    },
    methods: {
        checkCapslock(e) {
            const { key } = e
            this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z'
        },
        togglePasswordDisplaly() {
            this.hidePassword = !this.hidePassword
            this.$nextTick(()=>{
                this.$refs.password.focus()
            })
        },
        handleLogin() {
            this.$refs.form.validate(valid=>{
                if(valid){
                    this.loading=true
                    this.$store.dispatch('user/login', this.form)
                        .then(() => {
                            this.$router.push({ path: this.redirect || '/', query: this.queryParams })
                            this.loading = false
                        })
                        .catch(() => {
                            this.loading = false
                        })
                }
            })
        },
        getQueryParams(query) { 
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== 'redirect') {
                    acc[cur] = query[cur]
                }
                return acc
            }, {})
        }
    }
}
</script>

<style lang="scss" scoped>
  .login-container {
    .login-form {
      width: 400px;
      padding: 160px 35px 0;
      margin: 0 auto;
     /deep/{
        .el-input__suffix{
        right: 13px;
      }
     }
    }
  }
</style>