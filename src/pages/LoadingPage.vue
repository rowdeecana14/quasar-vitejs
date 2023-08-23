<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Default options</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-btn color="purple" @click="showLoading" label="Show Loading" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">With message</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-btn
            color="teal"
            @click="showLoadingMessage"
            label="Show Loading"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">With customized box</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-btn
            color="purple"
            @click="showLoadingCustombox"
            label="Show Loading"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">With customized</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-btn color="red" @click="showLoadingCustom" label="Show Loading" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Show and Change</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-btn
            color="primary"
            @click="showLoadingShowChange"
            label="Show Loading"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useQuasar, QSpinnerFacebook, QSpinnerGears } from "quasar";
import { onBeforeUnmount } from "vue";

const $q = useQuasar();
let timer;

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});

function showLoading() {
  $q.loading.show();

  // hiding in 2s
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 5000);
}

function showLoadingMessage() {
  $q.loading.show({
    message: "Some important process  is in progress. Hang on...",
  });

  // hiding in 3s
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
}

function showLoadingCustombox() {
  $q.loading.show({
    message: "Doing something. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });

  // hiding in 3s
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
}

function showLoadingCustom() {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: "yellow",
    spinnerSize: 140,
    backgroundColor: "purple",
    message: "Some important process is in progress. Hang on...",
    messageColor: "black",
  });

  // hiding in 3s
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
}

function showLoadingShowChange() {
  $q.loading.show({
    message: "First message. Gonna change it in 3 seconds...",
  });

  timer = setTimeout(() => {
    $q.loading.show({
      spinner: QSpinnerGears,
      spinnerColor: "red",
      messageColor: "black",
      backgroundColor: "yellow",
      message: "Updated message",
    });

    timer = setTimeout(() => {
      $q.loading.hide();
      timer = void 0;
    }, 2000);
  }, 2000);
}
</script>
