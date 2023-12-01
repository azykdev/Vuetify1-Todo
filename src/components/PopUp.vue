<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Create new project" flat color="black"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Add a new project">
        <v-card-text>
          <v-form ref="form" >
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

            <v-row>
              <v-col cols="7">
                <v-menu :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                    <v-text-field v-model="formattedDate" clearable v-bind="props" label="Dua date"
                      prepend-icon="mdi-calendar-range" :rules="inputRules"></v-text-field>
                  </template>
                  <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-btn color="teal" class="mx-0 mt-3 float-right" @click="submit">Add project</v-btn>
              </v-col>
            </v-row>
            
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>

    </template>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {

      if(this.$refs.form.validate() && this.title && this.content && this.due) {
        console.log(this.title, this.content);
        
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "EEE do MMM YYY") : ''
    }
  }
}
</script>

<style scoped></style>