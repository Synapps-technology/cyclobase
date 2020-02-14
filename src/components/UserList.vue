<template>
  <div class="centered-horizontaly">
    <div class="pagetitle">Administration des utilisateurs</div>

    <b-modal id="modal-confirm_delete" centered hide-header hide-footer size="sm" v-model="showModalConfirmDelete">
      <h6>Etes-vous sûr de vouloir supprimer l'utilisateur <b>{{ getUsername() }}</b>?</h6>
      <div>
        <b-button @click="hideModal">Fermer</b-button>
        <b-button @click="deleteUser" variant="danger">Supprimer</b-button>
      </div>
    </b-modal>

    <div class="userList">
      <b-table  :items="userList" :fields="fields" :busy="isBusy"  outlined striped>

        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Chargement...</strong>
          </div>
        </template>

        <template v-slot:cell(activated)="row">
          <b-form-group>
            <b-form-checkbox v-model="row.item.activated" disabled></b-form-checkbox>
          </b-form-group>
        </template>

        <template v-slot:cell(action)="row">
          <b-button size="sm" @click.prevent="askConfirmDeleteUser(row.item)">
            Supprimer
          </b-button>
        </template>

      </b-table>

    </div>
    <input type="submit" value="Ajouter un utilisateur" v-on:click="$router.push('/users/add')">
  </div>
</template>

<script>
    export default {
      name: "UserList",
      created() {
        this.refreshData();
      }, data: function () {
        return {
          fields : [
            { key: 'username', label: "Nom d'utilisateur" },
            { key: 'activated', label: 'Actif' },
            { key: 'action', label: 'Action' }
          ],
          userList: [],
          isBusy:false,
          selectedUser : null,
          showModalConfirmDelete : false
        }
      }, methods: {
        askConfirmDeleteUser: function (selectedUser) {
          this.selectedUser = selectedUser
          this.showModalConfirmDelete = true
        },
        getUsername(){
          if(this.selectedUser !== null){
            return this.selectedUser.username;
          }
        },
        hideModal() {
          this.showModalConfirmDelete = false;
        },
        deleteUser: function () {
          this.showModalConfirmDelete = false;

          console.log("event deleteUser : " + this.selectedUser.username);
          this.isBusy = true;
          var self = this;

          this.$http
            .delete('https://cyclobase-backend-staging.herokuapp.com/api/v1/users/' + this.selectedUser.user_id)
            .then(function (response) {
              console.log(response);
              self.selectedUser = null;
              self.refreshData();
            })
            .catch(function (error) {
              console.log(error);
              self.selectedUser = null;
              self.isBusy = false;
            })
        },
        refreshData: function () {
          this.isBusy = true;
          var self = this;

          this.$http
            .get('https://cyclobase-backend-staging.herokuapp.com/api/v1/users/')
            .then(function (response) {
              console.log(response);
              self.userList = response.data;
              self.isBusy = false;

            })
            .catch(function (error) {
              console.log(error);
              self.isBusy = false;
            })
        }
      },
    }
</script>

<style scoped>
  .userList{
    width: 640px;
  }
</style>
