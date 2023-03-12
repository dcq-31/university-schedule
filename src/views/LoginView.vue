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
  <div class="flex min-h-full items-center justify-center p-2">
    <main
      class="w-full max-w-sm p-5 sm:rounded-md sm:border sm:border-gray-100 sm:shadow-xl"
    >
      <div>
        <img
          src="/login-bg.svg"
          alt="Teacher adding tasks"
          class="mx-auto h-52 min-w-max sm:h-56"
        />
      </div>

      <div class="mt-5">
        <div class="text-2xl font-semibold text-slate-700">Inicia Sesión</div>

        <form class="mt-5 space-y-5">
          <div class="flex items-center">
            <div class="mr-2">
              <UserIcon class="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Usuario"
              class="form-input w-full text-sm placeholder:text-sm"
            />
          </div>

          <div class="relative flex items-center">
            <div class="mr-2">
              <KeyIcon class="h-5 w-5 text-slate-500" />
            </div>
            <input
              :type="passwordType"
              placeholder="Constraseña"
              class="form-input w-full text-sm placeholder:text-sm"
            />
            <EyeIcon
              v-if="showPassword"
              class="absolute right-0 mr-2 h-5 w-5 cursor-pointer text-slate-500"
              @click="toggleShowPassword"
            />
            <EyeSlashIcon
              v-else
              class="absolute right-0 mr-2 h-5 w-5 cursor-pointer text-slate-500"
              @click="toggleShowPassword"
            />
          </div>

          <div class="text-right font-medium">
            <span
              class="cursor-pointer text-sm tracking-wide text-primary transition-colors hover:text-primary-500"
              >¿Olvidaste tu constraseña?
            </span>
          </div>

          <div class="space-y-3 pt-2">
            <RouterLink
              :to="{ name: ROUTES_NAME.HOME }"
              class="btn btn-primary block"
            >
              Entrar
            </RouterLink>
          </div>

          <div class="text-center text-sm tracking-wide text-slate-500">
            ¿No eres administrador? Revisa
            <RouterLink
              :to="{ name: ROUTES_NAME.HOME }"
              class="cursor-pointer font-medium text-primary transition-colors hover:text-primary-500"
              >nuestros servicios</RouterLink
            >
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
