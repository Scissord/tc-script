<script setup>
// I THINK I SHOULD MAKE THIS COMPONENT FOR ME AND THAN REGISTER IT IN main.js
const props = defineProps({
  value: [null, String, Number, Object],
  onChange: Function,
  placeholder: String,
  options: {
    type: Array,
    default: () => [],
  },
  label: String,
  multiple: Boolean,
  className: String
});

</script>

<template>
  <vSelect
    :value="value"
    :reduce="(option) => onChange(option)"
    :options="options"
    :label="label ? label : 'label'"
    :placeholder="placeholder ? placeholder : 'Select'"
    :multiple="multiple"
    :class="['min-w-[200px]', className]"
  />
</template>

<style>
:root {
  --vs-colors--lightest: rgba(60, 60, 60, 0.26);
  --vs-colors--light: rgba(60, 60, 60, 0.5);
  --vs-colors--dark: #333;
  --vs-colors--darkest: rgba(0, 0, 0, 0.15);

  /* Search Input */
  --vs-search-input-color: inherit;
  --vs-search-input-bg: rgb(255, 255, 255);
  --vs-search-input-placeholder-color: #94a3b8;

  /* Font */
  --vs-font-size: 0.875rem;
  --vs-line-height: 1.25;

  /* Disabled State */
  --vs-state-disabled-bg: rgb(248, 248, 248);
  --vs-state-disabled-color: var(--vs-colors--light);
  --vs-state-disabled-controls-color: var(--vs-colors--light);
  --vs-state-disabled-cursor: not-allowed;

  /* Borders */
  --vs-border-color: #94a3b8;
  --vs-border-width: 1px;
  --vs-border-style: solid;
  --vs-border-radius: 0.375rem;

  /* Actions: house the component controls */
  --vs-actions-padding: 4px 6px 0 3px;

  /* Component Controls: Clear, Open Indicator */
  --vs-controls-color: #94a3b8;
  --vs-controls-size: 0.7;
  --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

  /* Selected */
  --vs-selected-bg: #f0f0f0;
  --vs-selected-color: var(--vs-colors--dark);
  --vs-selected-border-color: var(--vs-border-color);
  --vs-selected-border-style: var(--vs-border-style);
  --vs-selected-border-width: var(--vs-border-width);

  /* Dropdown */
  --vs-dropdown-bg: #fff;
  --vs-dropdown-color: inherit;
  --vs-dropdown-z-index: 10;
  --vs-dropdown-min-width: 160px;
  --vs-dropdown-max-height: 350px;
  --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

  /* Options */
  --vs-dropdown-option-bg: #000;
  --vs-dropdown-option-color: var(--vs-dropdown-color);
  --vs-dropdown-option-padding: 3px 20px;

  /* Active State */
  --vs-dropdown-option--active-bg: #5897fb;
  --vs-dropdown-option--active-color: #fff;

  /* Deselect State */
  --vs-dropdown-option--deselect-bg: #fb5858;
  --vs-dropdown-option--deselect-color: #fff;

  /* Transitions */
  --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  --vs-transition-duration: 150ms;
}
</style>
