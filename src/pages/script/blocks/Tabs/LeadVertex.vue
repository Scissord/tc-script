<script setup>
import { Input, Button } from '@components';
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
defineProps({
  order: Object,
  handleSaveOrder: Function
})

const cities = [
  'AKSAI', 'AKTAU', 'AKTOBE', 'ALMATA', 'ASTANA-KURER', 'ATYRAU', 'KARAGANDA', 'KOKSHETAU', 'KOSTANAI', 'KYLSARY',
  'KYZYLORDA', 'PAVLODAR', 'PETROPAVLOVSK', 'Saryagash', 'SEMEI', 'SHIMKENT', 'TALDYKORGAN', 'TARAZ', 'TEMIRTAU',
  'TURKESTAN', 'URALSK', 'UST-KAMENOGORSK', 'ZHANAOZEN', 'Zhetysai', 'ZHEZKAZGAN', 'EKIBASTUZ', 'Balkhash', 'Kentau'
];

const deliveryMethods = [
  'Курьер', 'Почта', 'Экспресс', 'ДВД'
];

const genders = [
  'Мужской', 'Женский'
];

const languages = [
  'Казахский', 'Русский'
];

const payMethods = [
  'Наличный расчет', 'Kaspi (оплачено)', 'Kaspi Red'
];

</script>

<template>
  <div
    class="flex flex-col gap-3 border border-slate-200 rounded-lg p-6 mt-6"
  >
    <!-- ORDER_ID -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        order_id:
      </p>
      <p>
        {{ order.order_id }}
      </p>
    </div>
    <!-- OPERATOR_ID -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        operatorID:
      </p>
      <p>
        {{ order.operatorID }}
      </p>
    </div>
    <!-- FIO -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        ФИО:
      </p>
      <Input
        id="order.fio"
        type="text"
        v-model="order.fio"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- QUANTITY -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Колличество:
      </p>
      <Input
        id="order.quantity"
        type="number"
        v-model="order.quantity"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- POST INDEX -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Почтовый индекс:
      </p>
      <Input
        id="order.postIndex"
        type="number"
        v-model="order.postIndex"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- CITY -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Город:
      </p>
      <vSelect
        v-model="order.city"
        :reduce="(option) => option"
        :options="cities"
        placeholder="Куда..."
        class="min-w-[150px] w-fit"
      />
    </div>
    <!-- REGION -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Регион:
      </p>
      <Input
        id="order.region"
        type="text"
        v-model="order.region"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- COMMENT -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Комментарий:
      </p>
      <Input
        id="order.comment"
        type="text"
        v-model="order.comment"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- ADDRESS -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Адрес:
      </p>
      <Input
        id="order.address"
        type="text"
        v-model="order.address"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- ADDITIONAL1/ДАТА ДОСТАВКИ -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Дата доставки:
      </p>
      <Input
        id="order.additional1"
        type="text"
        v-model="order.additional1"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- ADDITIONAL2/СПОСОБ ДОСТАВКИ -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Способ доставки:
      </p>
      <vSelect
        v-model="order.additional2"
        :reduce="(option) => option"
        :options="deliveryMethods"
        placeholder="Как..."
        class="min-w-[150px] w-fit"
      />
    </div>
    <!-- ADDITIONAL3/ШОТО -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        ADDITIONAL3:
      </p>
      <vSelect
        v-model="order.additional3"
        :reduce="(option) => option"
        :options="deliveryMethods"
        placeholder="Как..."
        class="min-w-[150px] w-fit"
      />
    </div>
    <!-- ADDITIONAL4/ПОЛ УОЛКЕР -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        ПОЛ:
      </p>
      <vSelect
        v-model="order.additional4"
        :reduce="(option) => option"
        :options="genders"
        placeholder="Выберите..."
        class="min-w-[150px] w-fit"
      />
    </div>
    <!-- ADDITIONAL7/ДОПОЛНИТЕЛЬНЫЙ ТЕЛЕФОН -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Доп телефон:
      </p>
      <Input
        id="order.additional7"
        type="text"
        v-model="order.additional7"
        placeholder="Введите..."
        className="text-md w-1/3 h-8"
      />
    </div>
    <!-- ADDITIONAL8/ЯЗЫК -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        Язык:
      </p>
      <vSelect
        v-model="order.additional8"
        :reduce="(option) => option"
        :options="languages"
        placeholder="Выберите..."
        class="min-w-[150px] w-fit"
      />
    </div>
    <!-- ADDITIONAL12/ОПЛАТА -->
    <div class="flex items-center justify-between">
      <p class="text-sm font-bold">
        ОПЛАТА:
      </p>
      <vSelect
        v-model="order.additional12"
        :reduce="(option) => option"
        :options="payMethods"
        placeholder="Выберите..."
        class="min-w-[150px] w-fit"
      />
    </div>

    <Button
      type="button"
      text="Сохранить"
      className="rounded-lg w-full bg-blue-500 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-700"
      @click="handleSaveOrder(order)"
    />
  </div>
</template>
