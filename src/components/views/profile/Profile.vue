<template>
  <div class="profile-lay">
    <p>User profile</p>
    <form id="form" class="form-inline" @submit.prevent="addUser">
      <div class="profile-main">
        <div class="part-upload">
          <img :src="newUser.image" alt="">
          <UiLoader v-model="newUser.image" @img-select="upload"></UiLoader>
        </div>
        <div class="part">
          <UiInput placeholder="" :disabled="true" v-model="newUser.firstName">First name</UiInput>
          <UiInput placeholder="" :disabled="true" v-model="newUser.lastName">Last name</UiInput>
          <UiInput placeholder="" :disabled="true" v-model="newUser.phone">Phone number</UiInput>
        </div>
        <div class="part">
          <UiSelect :options="['Angola','Argentina','Austria','America','Bulgaria']" v-model="newUser.country" :disabled="true">Country</UiSelect>
          <UiSelect :options="['New Your','Kiev','Lviv','Chernivtsi','Berlin']" v-model="newUser.city" :disabled="true">City</UiSelect>
          <UiInput :disabled="true" v-model="newUser.address">Address</UiInput>
        </div>
        <div class="part">
          <UiInput :disabled="true" v-model="newUser.postCode">Post code</UiInput>
          <UiButton :disabled="true" :onClick="consoleClickDisabled">Save</UiButton>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Firebase from 'firebase'
import UiLoader from '@/components/ui/ui-card/UiLoader'
import UiButton from '@/components/ui/ui-button/UiButton'
import UiInput from '@/components/ui/ui-input/UiInput'
import UiSelect from '@/components/ui/ui-tabs/UiSelect'

const config = {
  apiKey: 'AIzaSyDktRqlCRlmZ1Tsd1zuujO9y5jOI0gMUR0',
  authDomain: 'user-8e598.firebaseapp.com',
  databaseURL: 'https://user-8e598.firebaseio.com',
  projectId: 'user-8e598',
  storageBucket: 'user-8e598.appspot.com',
  messagingSenderId: '404256783146'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let usersRef = db.ref('users')

export default {
  firebase: {
    users: usersRef
  },
  data () {
    return {
      newUser: {
        firstName: '',
        lastName: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        postCode: ''
      }
    }
  },
  components: {
    UiLoader,
    UiButton,
    UiInput,
    UiSelect
  },
  methods: {
    addUser: function () {
      usersRef.push(this.newUser)
      this.newUser.firstName = ''
      this.newUser.lastName = ''
      this.newUser.phone = ''
      this.newUser.country = ''
      this.newUser.city = ''
      this.newUser.address = ''
      this.newUser.postCode = ''
      this.newUser.image = ''
    },
    upload (imageSel) {
      this.newUser.image = imageSel
    },
    consoleClickDisabled () {
      alert('Done')
    }
  }
}
</script>
<style scoped lang="sass">
  .form-inline
    background-color: white
    padding-top: 30px
    padding-bottom: 40px
    padding-left: 30px
  .part
    width: 100%
    margin-right: 20px
    justify-content: space-between
  .profile-main
    display: grid
    grid-template-columns: 2fr 3fr 3fr 3fr
    width: 100%
  .part-upload img
    max-width: 150px
    max-height: 150px
    border-radius: 50%
  .profile-lay p
    font-size: 20px
    margin-bottom: 40px
</style>
