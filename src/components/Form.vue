<template>
  <div class="main">
    <form @submit.prevent="submitForm()"   class="main-contain">
      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <label>AD</label>
          <input placeholder="Adınızı giriniz" :state="validateState('userName')" v-model="$v.form.userName.$model">
          <span v-if="!$v.form.userName.required">- Bu alan zorunludur.</span>
          <span v-if="!$v.form.userName.minLength">-Bu alan en az 2 karakter alabilir.</span>
          <span v-if="!$v.form.userName.maxLength">- Bu alan en fazla 10 karakter alabilir.</span>
          <span v-if="!$v.form.userName.nameValidations">- Türkçe karakter içeremez. </span>
        </div>

        <div class="main-contain-top-in">
          <label>SOYAD</label>
          <input :state="validateState('userSurname')" placeholder="Soyadınızı giriniz." v-model="form.userSurname">
          <span v-if="!$v.form.userSurname.required">- Bu alan zorunludur. </span>
          <span v-if="!$v.form.userSurname.minLength">- İsim en az 2 karakter içermelidir.</span>
          <span v-if="!$v.form.userSurname.surnameValidations">- Türkçe karakter içeremez. </span>
        </div>
      </div>


      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <label>TC KİMLİK NO</label>
          <input placeholder="T.C Numaranızı giriniz." maxlength="11" :state="validateState('userIdentity')"v-model="form.userIdentity">
          <span v-if="!$v.form.userIdentity.required">- Bu alan zorunludur.</span>
          <span v-if="!$v.form.userIdentity.minLength">- Bu alan en az 11 karakter alabilir.</span>
          <span v-if="!$v.form.userIdentity.maxLength">- Bu alan en fazla 11 karakter alabilir</span>
          <span v-if="!$v.form.userIdentity.identityValidations">- Geçerli bir kimlik numarası giriniz. </span>

        </div>
        <div class="main-contain-top-in">
          <label>EV DEĞERİ</label>
          <input placeholder="Ev değerini giriniz." v-model="form.userCost">
          <span v-if="!$v.form.userCost.required">- Bu alan zorunludur.</span>
          <span v-if="!$v.form.userCost.minValue">- En az 1000 TL girilebilir.</span>
          <span v-if="!$v.form.userCost.maxValue">- En fazla 1.000.000 TL girilebilir.</span>
        </div>
      </div>


      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <label>KREDİ TUTARI</label>
          <input :v="$v.form.userCredit" placeholder="Kredi tutarını giriniz." v-model="form.userCredit" >
          <span  v-if="!$v.form.userCredit.required">- Bu alan zorunludur.</span>
        </div>
        <div class="main-contain-top-in">
          <label>VADE</label>
          <select v-model="form.userExpire">
            <option value="" disabled selected>Vadeyi seçiniz.</option>
            <template v-for="expire in Object.keys(EXPIRE)">
              <option :value="EXPIRE[expire].TEXT">
                {{ EXPIRE[expire].TEXT }}
              </option>
            </template>
          </select>
          <span class="error" v-if="!$v.form.userExpire.required">- Bu alan zorunludur.</span>
        </div>
      </div>
      <div class="for">
        <button type="submit" class="main-contain-top-button">Devam Et</button>
      </div>
      <div></div>
    </form>

  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength, maxValue, minValue} from 'vuelidate/lib/validators'
import {EXPIRE} from "@/expire";

const nameValidations = (value) => {
  return /^[a-zA-Z]*$/.test(value)
}
const surnameValidations = (value) => {
  return /^[a-zA-Z]*$/.test(value)
}
const identityValidations = function (value) {
  value = value.toString();
  let isEleven = /^[0-9]{11}$/.test(value);
  let totalX = 0;
  for (let i = 0; i < 10; i++) {
    totalX += Number(value.substr(i, 1));
  }
  let isRuleX = totalX % 10 == value.substr(10, 1);
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(value.substr(i, 1));
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(value.substr(i, 1));
  }
  let isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9, 0);
  return isEleven && isRuleX && isRuleY;
};


const costValidation = (value) => {
  return /^[0-9]/.test(value)
}
const expireValidations = (value) => {
  return /^[0-9]/.test(value)
}

const creditValidation = (value) => {
  return /^[0-9]/.test(value)
}
export default {
  name: "Form",
  mixins: [validationMixin],

  data() {
    return {
      form: {
        userName: "",
        userSurname: "",
        userIdentity: "",
        userCost: "",
        userCredit: "",
        userExpire: "",
      },
      EXPIRE
    }
  },
  validations: {
    form: {
      userName: {
        required,
        nameValidations,
        minLength: minLength(2),
        maxLength: maxLength(10),
      },
      userSurname: {
        required,
        surnameValidations,
        minLength: minLength(2),
        maxLength: maxLength(10),
      },
      userIdentity: {
        required,
        identityValidations,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      userCost: {
        required,
        costValidation,
        minValue: minValue(1000),
        maxValue: maxValue(100000000),
      },
      userCredit: {
        required,
        creditValidation,
      },
      userExpire: {
        required,
        expireValidations,
      }


    }

  },
  methods: {
    validateState(name) {
      const {$dirty, $error} = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    submitForm() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$emit('onSubmit', this.form);
      this.clearForm();
    },
    clearForm() {
      this.form = {
        userName: "",
        userSurname: "",
        userIdentity: "",
        userCost: "",
        userCredit: "",
        userExpire: "",
      }
    },
  },


}
</script>

<style scoped>

.for {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  padding: 22px;
  &-contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-button {
        width: 480px;
        height: 43px;
        margin-top: 22px;
      }
      &-in {
        display: flex;
        flex-direction: column;
      }

    }
  }
}
</style>