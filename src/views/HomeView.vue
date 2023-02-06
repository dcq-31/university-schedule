<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ROUTES_NAME } from "../router/names";
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="p-2">
    <main>
      <div class="p-3">
        <div>
          <img src="/teacher.svg" alt="teacher" class="h-full w-60 mx-auto" />
        </div>
        <div>
          <div class="text-xl text-slate-700 font-semibold mt-2">
            ¿Eres profesor?
          </div>
          <div class="text-slate-500 mt-1">
            Ingresa tu cuenta de usuario para tener acceso a la administración
            de nuestro sitio.
          </div>

          <RouterLink
            :to="{ name: ROUTES_NAME.LOGIN }"
            class="px-3 py-2 text-sm text-brandeis-blue text-center font-semibold tracking-wider rounded-lg block w-fit mt-2 border-none ring-2 ring-brandeis-blue"
          >
            Inicia sesión
          </RouterLink>
        </div>
      </div>

      <div class="px-2 mt-5">
        <div class="text-2xl text-center font-semibold text-slate-700">
          Herramientas
        </div>

        <div class="mt-3 text-center">
          <RouterLink :to="{ name: ROUTES_NAME.CALENDAR }" class="group">
            <div class="p-2">
              <div
                class="p-4 w-fit mx-auto rounded-full group-hover:bg-brandeis-blue-500"
              >
                <CalendarDaysIcon
                  class="text-brandeis-blue h-20 w-20 group-hover:text-white"
                />
              </div>
              <div>
                <div
                  class="text-slate-700 text-xl mt-2 font-semibold group-hover:text-brandeis-blue"
                >
                  Horario de Clases
                </div>
                <div class="text-slate-500 mt-1">
                  ¿No sabes que clases tocan hoy o cuando tienes exámen? Revisa
                  nuestro calendario.
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>
