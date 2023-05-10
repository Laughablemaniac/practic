<script setup lang="ts">
import { computed, ref } from 'vue';

interface Entity {
  title: string;
  color?: string;
  index: number;
  enabled: boolean;
}

// Этот список изменять запрещено
const list = ref<Entity[]>([
  {
    title: 'позавтракать',
    color: 'red',
    index: 4,
    enabled: true,
  },
  {
    title: 'пойти гулять',
    color: 'green',
    index: 6,
    enabled: true,
  },
  {
    title: 'сходить в туалет',
    color: 'brown',
    index: 2,
    enabled: true,
  },
  {
    title: 'уйти на работу',
    color: 'cyan',
    index: 5,
    enabled: false,
  },
  {
    title: 'проснуться',
    color: 'blue',
    index: 1,
    enabled: true,
  },
  {
    title: 'умыться',
    color: 'purple',
    index: 3,
    enabled: true,
  },
]);

const preparedList = computed(() => {
return list.value.sort((a, b) => a.index - b.index);
});

function removeItem(index: number) {
  list.value.splice(index, 1);
}

/**
 * Задача (выполнять по-порядку):
 * 1) вывести отсортированный (по значению index) список дел и их нумерацию (#1 перед названием действия);
 * 2) исправить удаление, чтобы исчезал тот пункт, рядом с которым нажали на корзинку
 * 3) написать тест в src/tests/check.test.ts
 *
 * ПРИМЕЧАНИЕ - для удостоверенности в корректности решения задач можно запускать
 * тесты командой npm test (для этого удобнее открыть еще один терминал с помощью "+" ниже)
 */
</script>

<template>
  <div>
    <h1 class="text-xl mb-2">Начало выходного дня (по-порядку)</h1>
    <ul class="flex flex-col items-start pl-2">
      <li
        v-for="(e, i) in preparedList"
        :key="i"
        class="flex items-center gap-1"
        :style="{ color: e.color }"
      >
        <button
          class="text-red-500"
          title="Remove"
          :data-index="i"
          @click.prevent="removeItem(i)"
        >
          <i-ic-baseline-delete-outline />
        </button>
        {{ '#' + (i + 1) + ' ' + e.title }}
      </li>
    </ul>
  </div>
</template>
