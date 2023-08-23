<template>
  <q-layout view="hHh Lpr lff"  class="shadow-2 rounded-borders">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Content Management System</q-toolbar-title>

        <q-btn
          color="secondary"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
        />
          
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
          <q-menu anchor="top end" self="top end">
            <q-list class="text-grey-8" style="min-width: 100px">
              <q-item aria-hidden="true">
                <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">User Settings</q-item-section>
              </q-item>
              <q-item  clickable v-close-popup aria-hidden="true">
                <q-item-section avatar style="min-width: 0px">
                  <q-icon name="account_box" />
                </q-item-section>
                <q-item-section>Update Profile</q-item-section>
              </q-item>
              <q-item  clickable v-close-popup aria-hidden="true">
                <q-item-section avatar  style="min-width: 0px">
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer reveal elevated class="bg-grey-3 text-dark">
      <q-toolbar>
        © 2023 Telcom Live Content, Inc. All rights reserved.
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding  class="rounded-borders" >
          <q-item-label header class="text-weight-bold text-uppercase">
            CMS Menu
          </q-item-label>

          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item  :active="menuItem.label === 'Home'" v-ripple  :to="menuItem.path">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
         
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
       <div class="q-pa-md q-gutter-sm">
        <q-breadcrumbs>
          <q-breadcrumbs-el icon="home" to="/" />
          <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
          <q-breadcrumbs-el label="Build" icon="build" />
        </q-breadcrumbs>
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup>
import { ref } from 'vue';

const menuList = [
  {
    icon: 'home',
    label: 'Home',
    path: "/",
    separator: false
  },
  {
    icon: 'dynamic_feed ',
    label: 'Content Control',
    path: "/",
    separator: false
  },
  {
    icon: 'assignment',
    label: 'Product Templates',
    path: "/product-templates",
    separator: false
  },
  {
    icon: 'text_snippet ',
    label: 'Working Document Templates',
    path: "/working-document-templates",
    separator: false
  },
  {
    icon: 'source',
    label: 'Training Materials',
    path: "/training-materials",
    separator: false
  },
  {
    icon: 'folder_shared',
    label: 'Maintenance of Shared Files',
    path: "/maitenance-of-shared-files",
    separator: false
  },
  {
    icon: 'manage_accounts',
    label: 'User Management',
    path: "/user-management",
    separator: false
  },
  {
    icon: 'receipt_long ',
    label: 'Activity Logs',
    path: "/activity-logs",
    separator: false
  }
];

const drawer = ref(false);
const miniState = ref(true);

function toggleLeftDrawer() {
  drawer.value = !drawer.value
}
</script>

<style lang="sass" scoped>
</style>