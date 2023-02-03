<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  UserIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import { ROUTES_NAME } from "../router/names";

const showPassword = ref(false);
const passwordType = computed(() => (showPassword.value ? "text" : "password"));

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<template>
  <div class="h-full p-2 flex items-center">
    <main class="mx-auto p-5 w-full max-w-sm">
      <div>
        <img src="/login-bg.svg" alt="login-bg" class="max-h-52 mx-auto" />
      </div>

      <div class="mt-5">
        <div class="text-xl font-semibold text-slate-700">Inicia Sesión</div>

        <form class="space-y-5 mt-5">
          <div class="flex items-center">
            <div class="mr-2">
              <UserIcon class="text-slate-500 h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Usuario"
              class="w-full max-w-sm px-3 py-2 text-slate-700 bg-slate-50 border-b border-slate-300 rounded-t-md text-sm placeholder-slate-500 placeholder:text-sm focus:outline-none focus:border-brandeis-blue-400"
            />
          </div>

          <div class="flex items-center relative">
            <div class="mr-2">
              <KeyIcon class="text-slate-500 h-5 w-5" />
            </div>
            <input
              :type="passwordType"
              placeholder="Constraseña"
              class="w-full max-w-sm px-3 py-2 text-slate-700 bg-slate-50 border-b border-slate-300 rounded-t-md text-sm placeholder-slate-500 placeholder:text-sm focus:outline-none focus:border-brandeis-blue-400"
            />
            <EyeIcon
              v-if="showPassword"
              class="text-slate-500 h-5 w-5 absolute right-0 mr-2 cursor-pointer"
              @click="toggleShowPassword"
            />
            <EyeSlashIcon
              v-else
              class="text-slate-500 h-5 w-5 absolute right-0 mr-2 cursor-pointer"
              @click="toggleShowPassword"
            />
          </div>

          <div class="text-sm font-medium text-right">
            <span
              class="cursor-pointer text-brandeis-blue hover:text-brandeis-blue-500"
              >Olvidaste la constraseña?
            </span>
          </div>

          <div class="space-y-3 pt-2">
            <RouterLink
              :to="{ name: ROUTES_NAME.HOME }"
              class="px-3 py-2 text-sm tracking-wider text-white text-center font-semibold rounded-lg block w-full border bg-brandeis-blue hover:shadow-sm hover:bg-brandeis-blue-500 focus:outline-none focus:ring-2 focus:ring-brandeis-blue focus:ring-offset-2"
            >
              Entrar
            </RouterLink>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
