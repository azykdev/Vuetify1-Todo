<template>
  <div>
    <h1 class="text-subtitle-1 text-grey">Dashboard</h1>
    <v-container class="my-5">

      <v-row class="mb-3">
        <v-btn flat class="text-grey-darken-1" size="small" @click="sortBy('title')">
          <v-icon icon="mdi-folder" class="mr-2"></v-icon>
          <span class="text-caption text-lowercase">By project name</span>
          <v-tooltip activator="parent" location="top">Sort projects by project name</v-tooltip>
        </v-btn>  
        <v-btn flat class="text-grey-darken-1" size="small" @click="sortBy('person')">
          <v-icon icon="mdi-account" class="mr-2"></v-icon>
          <span class="text-caption text-lowercase">By person</span>
          <v-tooltip activator="parent" location="top">Sort projects by person</v-tooltip>
        </v-btn>
      </v-row>

      <v-card class="pa-3 " v-for="project in projects" :key="project.person">
        <v-row class="pa-3 project" :class="project.status">
          <v-col cols="12" md="6">
            <h6 class="text-caption text-grey">Project Title</h6>
            <h5 class="text-medium-emphasis font-weight-regular">{{ project.title }}</h5>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <h6 class="text-caption text-grey">Person</h6>
            <h5 class="text-medium-emphasis font-weight-regular">{{ project.person }}</h5>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <h6 class="text-caption text-grey">Due by</h6>
            <h5 class="text-medium-emphasis font-weight-regular">{{ project.due }}</h5>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="float-right">
              <v-chip size="small" class="my-2 text-caption text-white" :class="project.status">{{ project.status
              }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>      
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'dashboardView',
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit earum ad nostrum suscipit optio, hic eum odit, aspernatur doloribus deserunt temporibus ut adipisci fuga numquam laborum? Consequuntur, debitis aut?' },
        { title: 'Code up the homepage', person: 'Azyk * Developer', due: '10th Jan 2016', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit earum ad nostrum suscipit optio, hic eum odit, aspernatur doloribus deserunt temporibus ut adipisci fuga numquam laborum? Consequuntur, debitis aut?' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '1st Jan 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit earum ad nostrum suscipit optio, hic eum odit, aspernatur doloribus deserunt temporibus ut adipisci fuga numquam laborum? Consequuntur, debitis aut?' },
        { title: 'Create a community forum', person: 'John Doe', due: '1st Jan 2023', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit earum ad nostrum suscipit optio, hic eum odit, aspernatur doloribus deserunt temporibus ut adipisci fuga numquam laborum? Consequuntur, debitis aut?' },
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
});
</script>

<style>
.project.ongoing {
  border-left: 4px solid orange;
}

.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.ongoing {
  background-color: orange;
}

.v-chip.complete {
  background-color: #3cd1c2;
}

.v-chip.overdue {
  background-color: tomato;
}
</style>
