<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  UserIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";

const showPassword = ref(false);
const passwordType = computed(() => (showPassword.value ? "text" : "password"));

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<template>
  <div class="px-5 py-2">
    <main class="mx-auto max-w-sm">
      <div class="p-1">
        <img src="/login-bg.svg" alt="login-bg" class="max-h-64 mx-auto" />
      </div>

      <div class="px-2">
        <div class="font-sans text-2xl font-semibold text-slate-700">
          Inicia Sesión
        </div>

        <form class="space-y-5 mt-5">
          <div class="flex items-center">
            <div class="mr-2">
              <UserIcon class="text-slate-500 h-5 w-5 stroke-2" />
            </div>
            <input
              type="text"
              placeholder="Usuario"
              class="w-full max-w-sm px-3 py-2 font-sans text-slate-700 bg-slate-50 border-b border-slate-300 rounded text-sm placeholder-slate-500 focus:outline-none focus:border-brandeis-blue-100"
            />
          </div>

          <div class="flex items-center relative">
            <div class="mr-2">
              <KeyIcon class="text-slate-500 h-5 w-5 stroke-2" />
            </div>
            <input
              :type="passwordType"
              placeholder="Constraseña"
              class="w-full max-w-sm px-3 py-2 font-sans text-slate-700 bg-slate-50 border-b border-slate-300 rounded text-sm placeholder-slate-500 focus:outline-none focus:border-brandeis-blue-100"
            />
            <EyeIcon
              v-if="showPassword"
              class="text-slate-500 h-5 w-5 stroke-2 absolute right-0 mr-2 cursor-pointer"
              @click="toggleShowPassword"
            />
            <EyeSlashIcon
              v-else
              class="text-slate-500 h-5 w-5 stroke-2 absolute right-0 mr-2 cursor-pointer"
              @click="toggleShowPassword"
            />
          </div>

          <div class="text-sm font-medium font-sans text-right">
            <span
              class="cursor-pointer text-brandeis-blue hover:text-brandeis-blue-300"
              >Olvidaste la constraseña?
            </span>
          </div>

          <div class="space-y-3 pt-2">
            <RouterLink
              to="/"
              class="px-3 py-2 text-sm tracking-wider text-white text-center font-sans font-semibold rounded-lg block w-full border bg-brandeis-blue-400 hover:shadow-md hover:bg-brandeis-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brandeis-blue focus:ring-offset-2"
            >
              Entrar
            </RouterLink>

            <RouterLink
              to="/"
              class="px-3 py-2 text-sm tracking-wider text-slate-800 text-center font-sans font-semibold rounded-lg block w-full bg-slate-200 hover:shadow-md hover:bg-slate-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2"
            >
              Página Principal
            </RouterLink>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
