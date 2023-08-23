<template>
  <q-page padding>
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

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Options with validation</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            label="Radio Options"
            color="primary"
            @click="radioOptionValidation"
          />
          <q-btn
            label="Checkbox Options"
            color="primary"
            @click="checkboxOptionValidation"
          />
          <q-btn
            label="Toggle Options"
            color="primary"
            @click="toggleOptionValidation"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Showing progress</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            label="Default progress"
            color="primary"
            @click="showDefault"
          />
          <q-btn label="Custom progress" color="primary" @click="showCustom" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Unsafe HTML message</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            label="Show HTML Dialog"
            color="primary"
            @click="showDialogHTML"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useQuasar, QSpinnerGears } from "quasar";
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

function prompt3() {
  $q.dialog({
    title: "Prompt",
    message: "What is your name? (Minimum 3 characters)",
    prompt: {
      model: "",
      isValid: (val) => val.length > 2, // << here is the magic
      type: "text", // optional
    },
    cancel: true,
    persistent: true,
  }).onOk((data) => {
    // console.log('>>>> OK, received', data)
  });
}

function radioOptionValidation() {
  $q.dialog({
    title: "Options",
    message: "Choose your option, but make sure it's the second one :)",
    options: {
      type: "radio",
      model: "opt1",
      isValid: (val) => val === "opt2",
      // inline: true
      items: [
        { label: "Option 1", value: "opt1", color: "secondary" },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ],
    },
    cancel: true,
    persistent: true,
  }).onOk((data) => {
    // console.log('>>>> OK, received', data)
  });
}

function checkboxOptionValidation() {
  $q.dialog({
    title: "Options",
    message: "Choose your options, but make sure you also pick the second one.",
    options: {
      type: "checkbox",
      model: [],
      isValid: (model) => model.includes("opt2"),
      // inline: true
      items: [
        { label: "Option 1", value: "opt1", color: "secondary" },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ],
    },
    cancel: true,
    persistent: true,
  }).onOk((data) => {
    // console.log('>>>> OK, received', data)
  });
}

function toggleOptionValidation() {
  $q.dialog({
    title: "Options",
    message: "Choose your options, but make sure you also pick the first two.",
    options: {
      type: "toggle",
      model: [],
      isValid: (model) => model.includes("opt1") && model.includes("opt2"),
      // inline: true,
      items: [
        { label: "Option 1", value: "opt1", color: "secondary" },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ],
    },
    cancel: true,
    persistent: true,
  }).onOk((data) => {
    // console.log('>>>> OK, received', data)
  });
}

function showDefault() {
  const dialog = $q.dialog({
    message: "Uploading... 0%",
    progress: true, // we enable default settings
    persistent: true, // we want the user to not be able to close it
    ok: false, // we want the user to not be able to close it
  });

  // we simulate some progress here...
  let percentage = 0;
  const interval = setInterval(() => {
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

    // we update the dialog
    dialog.update({
      message: `Uploading... ${percentage}%`,
    });

    // if we are done, we're gonna close it
    if (percentage === 100) {
      clearInterval(interval);
      setTimeout(() => {
        dialog.hide();
      }, 350);
    }
  }, 500);
}

function showCustom() {
  const dialog = $q.dialog({
    title: "Uploading...",
    dark: true,
    message: "0%",
    progress: {
      spinner: QSpinnerGears,
      color: "amber",
    },
    persistent: true, // we want the user to not be able to close it
    ok: false, // we want the user to not be able to close it
  });

  // we simulate some progress here...
  let percentage = 0;
  const interval = setInterval(() => {
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

    // we update the dialog
    dialog.update({
      message: `${percentage}%`,
    });

    // if we are done...
    if (percentage === 100) {
      clearInterval(interval);

      dialog.update({
        title: "Done!",
        message: "Upload completed successfully",
        progress: false,
        ok: true,
      });
    }
  }, 500);
}

function showDialogHTML() {
  $q.dialog({
    title: "Alert<em>!</em>",
    message:
      '<em>I can</em> <span class="text-red">use</span> <strong>HTML</strong>',
    html: true,
  })
    .onOk(() => {
      // console.log('OK')
    })
    .onCancel(() => {
      // console.log('Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}
</script>
