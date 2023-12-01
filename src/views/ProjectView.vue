<template>
  <div>
    <h1 class="text-subtitle-1 text-grey">Project</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title" :title="project.title">
          <v-expansion-panel-text class="text-grey">
            <div class="font-weight-bold">due {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>



    </v-container>

  </div>
</template>

<script>
export default {
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
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person == 'The Net Ninja'
      })
    }
  }
}
</script>

<style scoped></style>