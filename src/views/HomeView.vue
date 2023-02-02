<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ROUTES_NAME } from "../router/names";
</script>

<template>
  <div class="p-1">
    <main class="py-2 px-3">
      <div class="p-3 text-sm rounded-md border border-slate-200">
        <div class="font-semibold text-slate-700">Eres profesor?</div>
        <div class="text-slate-500">
          Ingresa tu cuenta de usario para tener acceso a la administración
        </div>

        <RouterLink
          :to="{ name: ROUTES_NAME.LOGIN }"
          class="block w-min ml-auto mr-5 px-3 py-1.5 text-xs tracking-wider font-medium rounded-lg text-brandeis-blue text-center bg-slate-100 hover:shadow-sm hover:bg-slate-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
        >
          Visitar
        </RouterLink>
      </div>

      <div class="mt-5">
        <div class="text-xl font-medium text-slate-700">Herramientas</div>

        <div class="mt-3">
          <RouterLink :to="{ name: ROUTES_NAME.LOGIN }">
            <div
              class="flex items-center space-x-3 p-3 rounded-lg border border-transparent hover:border-brandeis-blue-100"
            >
              <img
                src="/icons/calendar.png"
                alt="calendar icon"
                class="h-16 w-16"
              />

              <div>
                <div class="text-slate-700 text-sm font-semibold">
                  Horario de Clases
                </div>
                <div class="text-slate-500 mt-1 text-xs tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div>
                  <span
                    class="text-carrot-orange font-medium text-xs py-1 px-2 rounded-xl bg-orange-50"
                  >
                    Estudiante
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
