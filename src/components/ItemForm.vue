<script setup lang="ts">
import { ref } from "vue";
import MAlerts from "@/components/MAlerts.vue";

interface FieldState {
  value: string;
  valid: boolean | null;
  errorMessage: string;
}

const formData = ref<Record<string, FieldState>>({
  first_name: { value: "", valid: null, errorMessage: "Please enter your first name." },
  last_name: { value: "", valid: null, errorMessage: "Please enter your last name." },
  email: { value: "", valid: null, errorMessage: "Please enter a valid email." }
});

const showAlert = ref(false);
const alertMessage = ref("");

const validateField = (field: keyof typeof formData.value) => {
  const data = formData.value[field];
  if (data.value.trim() === "") {
    data.valid = false;
  } else if (field === "email" && !/\S+@\S+\.\S+/.test(data.value)) {
    data.valid = false;
  } else {
    data.valid = true;
  }
};

const submitForm = () => {
  let isValid = true;
  Object.keys(formData.value).forEach((key) => {
    validateField(key as keyof typeof formData.value);
    if (!formData.value[key as keyof typeof formData.value].valid) {
      isValid = false;
    }
  });

  if (isValid) {
    alertMessage.value = "Form submitted successfully!";
    showAlert.value = true;
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <MAlerts v-if="showAlert" :message="alertMessage" @close="showAlert = false" />

    <div>
      <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">First name</label>
      <input
        id="first_name"
        v-model="formData.first_name.value"
        @blur="validateField('first_name')"
        type="text"
        class="w-full p-2.5 border rounded-lg text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        :class="{
          'border-green-500 text-green-900 bg-green-50': formData.first_name.valid === true,
          'border-red-500 text-red-900 bg-red-50': formData.first_name.valid === false
        }"
        placeholder="John"
        required
      />
      <p v-if="formData.first_name.valid === false" class="text-sm text-red-600 mt-1">{{ formData.first_name.errorMessage }}</p>
      <p v-if="formData.first_name.valid === true" class="text-sm text-green-600 mt-1">✔ Well done!</p>
    </div>

    <div>
      <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Last name</label>
      <input
        id="last_name"
        v-model="formData.last_name.value"
        @blur="validateField('last_name')"
        type="text"
        class="w-full p-2.5 border rounded-lg text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        :class="{
          'border-green-500 text-green-900 bg-green-50': formData.last_name.valid === true,
          'border-red-500 text-red-900 bg-red-50': formData.last_name.valid === false
        }"
        placeholder="Doe"
        required
      />
      <p v-if="formData.last_name.valid === false" class="text-sm text-red-600 mt-1">{{ formData.last_name.errorMessage }}</p>
      <p v-if="formData.last_name.valid === true" class="text-sm text-green-600 mt-1">✔ Well done!</p>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-900 dark:text-white">Email address</label>
      <input
        id="email"
        v-model="formData.email.value"
        @blur="validateField('email')"
        type="email"
        class="w-full p-2.5 border rounded-lg text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        :class="{
          'border-green-500 text-green-900 bg-green-50': formData.email.valid === true,
          'border-red-500 text-red-900 bg-red-50': formData.email.valid === false
        }"
        placeholder="john.doe@company.com"
        required
      />
      <p v-if="formData.email.valid === false" class="text-sm text-red-600 mt-1">{{ formData.email.errorMessage }}</p>
      <p v-if="formData.email.valid === true" class="text-sm text-green-600 mt-1">✔ Well done!</p>
    </div>

    <button type="submit" class="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Submit
    </button>
  </form>
</template>
