import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

test('порядок пунктов и их содержимое верное', async () => {
  const wrapper = mount(App, {});

  expect(wrapper.html()).toMatchSnapshot();
});

test('удаление конкретного пункта', async () => {
  const wrapper = mount(App, {});

  expect(wrapper.text()).toContain('проснуться');

  await wrapper.find(`button[data-index="1"]`).trigger('click');

  expect(wrapper.text()).not.toContain('#2 проснуться');
  expect(wrapper.text()).toContain('пойти гулять');
});

test('кол-во пунктов после удаления уменьшилось', async () => {
  /**
   * Задача:
   * 1) написать тест, который проверит, что после клика на значок удаления кол-во элементов уменьшится
   *
   * ПРИМЕЧАНИЕ - тесты запускаются командой npm test
   */
   const wrapper = mount(App, {});

   const initialItemCount = wrapper.findAll('li').length;
 
   expect(initialItemCount).toBe(6);
 
   await wrapper.find(`button[data-index="2"]`).trigger('click');
 
   const updatedItemCount = wrapper.findAll('li').length;
 
   expect(updatedItemCount).toBe(5);
});
