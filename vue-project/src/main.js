import { createApp } from 'vue'


import Country from './components/Country.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import PersonalProfile from './components/PersonalProfile.vue'



const app = createApp(App)

app.component('country', Country)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('personal-profile', PersonalProfile)

app.mount('#app')
                  