<template>
  <q-page padding>
    <p v-for="n in 15" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
      praesentium molestias a adipisci, dolore vitae odit, quidem consequatur
      optio voluptates asperiores pariatur eos numquam rerum delectus commodi
      perferendis voluptate?
    </p>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="teal" />
    </q-page-scroller>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Basic Alerts</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Alert" color="primary" @click="alert" />
          <q-btn label="Confirm" color="primary" @click="confirm" />
          <q-btn label="Prompt" color="primary" @click="prompt" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Radios, Checkboxes, Toggles</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Radio Options" color="primary" @click="radio" />
          <q-btn label="Checkbox Options" color="primary" @click="checkbox" />
          <q-btn label="Toggle Options" color="primary" @click="toggle" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Other options</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Custom Buttons" color="primary" @click="customBtn" />
          <q-btn label="Positioned" color="primary" @click="positioned" />
          <q-btn label="Stacked Buttons" color="primary" @click="stacked" />
          <q-btn label="Auto Closing" color="primary" @click="autoClose" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Using native attributes</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            label="Prompt (1-10, step 2)"
            color="primary"
            @click="prompt2"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Prompt with validation</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
    <q-btn label="Prompt" color="primary" @click="prompt3" />
  </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();

function alert() {
  $q.dialog({
    title: "Alert",
    message: "Some message",
  })
    .onOk(() => {
      console.log("OK");
    })
    .onCancel(() => {
      console.log("Cancel");
    })
    .onDismiss(() => {
      console.log("I am triggered on both OK and Cancel");
    });
}

function confirm() {
  $q.dialog({
    title: "Confirm",
    message: "Would you like to turn on the wifi?",
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      console.log(">>>> OK");
    })
    .onOk(() => {
      console.log(">>>> second OK catcher");
    })
    .onCancel(() => {
      console.log(">>>> Cancel");
    })
    .onDismiss(() => {
      console.log("I am triggered on both OK and Cancel");
    });
}

function prompt() {
  $q.dialog({
    title: "Prompt",
    message: "What is your name?",
    prompt: {
      model: "",
      type: "text", // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      console.log(">>>> OK, received", data);
    })
    .onCancel(() => {
      console.log(">>>> Cancel");
    })
    .onDismiss(() => {
      console.log("I am triggered on both OK and Cancel");
    });
}

function radio() {
  $q.dialog({
    title: "Options",
    message: "Choose an option:",
    options: {
      type: "radio",
      model: "opt1",
      // inline: true
      items: [
        { label: "Option 1", value: "opt1", color: "secondary" },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ],
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      // console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

function checkbox() {
  $q.dialog({
    title: "Options",
    message: "Choose your options:",
    options: {
      type: "checkbox",
      model: [],
      // inline: true
      items: [
        { label: "Option 1", value: "opt1", color: "secondary" },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ],
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      // console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

function toggle() {
  $q.dialog({
    title: "Options",
    message: "Choose your options:",
    options: {
      type: "toggle",
      model: [],
      // inline: true,
      items: [
        { label: "Option 1", value: "opt1", color: "secondary" },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ],
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      // console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

function customBtn() {
  $q.dialog({
    title: "Confirm",
    message: "Would you like to turn on the wifi?",
    ok: {
      push: true,
    },
    cancel: {
      push: true,
      color: "negative",
    },
    persistent: true,
  })
    .onOk(() => {
      // console.log('>>>> OK')
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

function positioned() {
  $q.dialog({
    title: "Positioned",
    message: "This dialog appears from bottom.",
    position: "bottom",
  });
}

function stacked() {
  $q.dialog({
    title: "Stacked Buttons",
    stackButtons: true,
    cancel: true,
  });
}

function autoClose() {
  let seconds = 3;

  const dialog = $q
    .dialog({
      title: "Alert",
      message: `Autoclosing in ${seconds} seconds.`,
    })
    .onOk(() => {
      // console.log('OK')
    })
    .onCancel(() => {
      // console.log('Cancel')
    })
    .onDismiss(() => {
      clearTimeout(timer);
      // console.log('I am triggered on both OK and Cancel')
    });

  const timer = setInterval(() => {
    seconds--;

    if (seconds > 0) {
      dialog.update({
        message: `Autoclosing in ${seconds} second${seconds > 1 ? "s" : ""}.`,
      });
    } else {
      clearInterval(timer);
      dialog.hide();
    }
  }, 1000);
}

function prompt2() {
  $q.dialog({
    title: "Prompt with native attributes",
    message: "Please type a value between 0 and 10:",
    prompt: {
      model: 2,
      type: "number",

      // native attributes:
      min: 0,
      max: 10,
      step: 2,
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      // console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}
</script>
