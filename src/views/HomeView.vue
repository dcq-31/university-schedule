<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ROUTES_NAME } from "../router/names";
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="p-2">
    <main class="py-2 px-3">
      <div
        class="p-3 border border-brandeis-blue-100 text-sm rounded-md flex items-center space-x-2"
      >
        <div>
          <div class="font-semibold text-slate-600">¿Eres profesor?</div>
          <div class="text-slate-500 mt-2">
            Ingresa tu cuenta de usuario para tener acceso a la administración
          </div>

          <RouterLink
            :to="{ name: ROUTES_NAME.LOGIN }"
            class="block mt-2 font-medium text-brandeis-blue hover:text-brandeis-blue-500"
          >
            Inicia sesión
          </RouterLink>
        </div>
      </div>

      <div class="mt-5">
        <div class="text-xl font-medium text-slate-700">Herramientas</div>

        <div class="mt-3">
          <RouterLink :to="{ name: ROUTES_NAME.LOGIN }">
            <div class="py-2 px-1 w-fit rounded-lg flex items-center space-x-3">
              <div class="shrink-0">
                <CalendarDaysIcon class="text-brandeis-blue-500 h-16 w-16" />
              </div>
              <div class="space-y-1">
                <div class="text-slate-600 text-sm font-semibold">
                  Horario de Clases
                </div>
                <div class="text-slate-500 text-xs tracking-wider">
                  ¿No sabes que clases tocan hoy o cuando tienes exámen? Revisa
                  nuestro calendario.
                </div>
                <div class="ml-2 space-x-1">
                  <span
                    class="text-carrot-orange text-xs py-1 px-2 rounded-xl bg-orange-50"
                  >
                    Estudiante
                  </span>
                  <span
                    class="text-brandeis-blue text-xs py-1 px-2 rounded-xl bg-blue-50"
                  >
                    Profesor
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>
