<template>
  <div class="home">
    <button @click="handleLogout()">Logout</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { logout } from '@/api/auth'
import router from '@/router'

export default defineComponent({
  name: 'Home',
  setup () {
    const handleLogout = () => {
      logout().then(() => {
        router.push('/about')
      })
    }
    return {
      handleLogout
    }
  }
})
</script>
