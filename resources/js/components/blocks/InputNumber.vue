<template lang="pug">
label.form-label.w-100.fs-5.text-secondary(v-if="compare === false")
    span.ps-2.ms-1.mb-2.d-block {{label}}
    input.form-control.border-dark(type="text" data-phone-pattern :name="id" name="phone" :class="{'form-control-sm': small}" :placeholder="placeholder" :disabled="disabled" :value="value" :min="min" :max="max" @input="$emit('update:value', $event.target.value)")
label.form-label.w-100.text-secondary.m-0.input-group.w-100.fs-7(v-else)
    input.form-control.fs-7(type="number" :class="{'form-control-sm': small}" :disabled="disabled" aria-label="First name" placeholder="от: " @input="dateTo($event.target.value)")
    span.input-group-text.m-0.p-1 -
    input.form-control.fs-7(type="number" :class="{'form-control-sm': small}" :disabled="disabled" aria-label="Last name" placeholder="до: " @input="dateEnd($event.target.value)")
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "Number"
        },
        value: {
            type: String,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        min: {
            type: Number,
            default: 0
        },
        small: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 4
        },
        compare: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            to: "",
            end: ""
        }
    },
    emits: ['update:value'],
    methods: {
        changeData() {
            let date = {
                to: this.to,
                end: this.end
            }
            this.$emit("update:value", date)
        },
        dateTo(value) {
            this.to = value
            this.changeData()
        },
        dateEnd(value) {
            this.end = value
            this.changeData()
        }
    },
    async mounted() {
        document.addEventListener("DOMContentLoaded", function() {
  var eventCalllback = function(e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
  }
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
    }
}
</script>

<style scoped>

</style>