<template>
  <div>
    <h1 class="text-subtitle-1 text-grey">Team</h1>

    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card class="text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="bg-grey-lighten-3 ">
                <img :src="person.avatar" width="140">

              </v-avatar>
            </v-responsive>
            <v-card-text>
              <h3 class="text-medium-emphasis font-weight-regular">{{ person.name }}</h3>
              <h6 class="text-caption text-grey">{{ person.role }}</h6>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" prepend-icon="mdi-message">Message</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: 'https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg  ' },
        { name: 'Azyk * developer', role: 'Web developer', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/383/461/small/man-face-clipart-design-illustration-free-png.png' },
        { name: 'Chun li', role: 'Social Media Maverick', avatar: 'https://static.vecteezy.com/system/resources/previews/009/397/892/non_2x/woman-face-expression-clipart-design-illustration-free-png.png' },
        { name: 'Ryu', role: 'Grafik dizayner', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: 'https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png' },
      ]
    }
  }
}
</script>

<style scoped></style>