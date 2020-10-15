<template>
  <div class="main">
    <form @submit.prevent="submitForm()" class="main-contain" >
      <div class="main-contain-top">

        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">AD</a>
          <input maxlength="11" :state="validateState('userName')" v-model="$v.form.userName.$model" class="main-contain-top-in-input">
          <div class="error" v-if="!$v.form.userName.required">- This field is required</div>
          <div class="error" v-if="!$v.form.userName.minLength">- Name must have at least 2 letters.</div>
          <div class="error" v-if="!$v.form.userName.maxLength">- Name must max 10 letters.</div>
          <div class="error" v-if="!$v.form.userName.nameValidations">- Türkçe karakter içeremez. </div>
        </div>

        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">SOYAD</a>
          <input v-model="form.userSurname" class="main-contain-top-in-input">
          <div class="error" v-if="!$v.form.userSurname.required">- This field is required</div>
          <div class="error" v-if="!$v.form.userSurname.minLength">- Name must have at least 2 letters.</div>
          <div class="error" v-if="!$v.form.userSurname.surnameValidations">- Türkçe karakter içeremez. </div>
        </div>
      </div>


      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">TC KİMLİK NO</a>
          <input maxlength="11" v-model="form.userIdentity" class="main-contain-top-in-input">
          <div class="error" v-if="!$v.form.userIdentity.required">- Bu alan gereklidir.</div>
          <div class="error" v-if="!$v.form.userIdentity.minLength">- Bu alan en az 11 karakter alabilir.</div>
          <div class="error" v-if="!$v.form.userIdentity.maxLength">- Bu alan en fazla 11 karakter alabilir</div>
          <div class="error" v-if="!$v.form.userIdentity.identityValidations">- Harf İçeremez </div>
        </div>
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">EV DEĞERİ</a>
          <input v-model="form.userCost" class="main-contain-top-in-input">
          <div class="error" v-if="!$v.form.userCost.required">- Bu alan gereklidir.</div>
          <div class="error" v-if="!$v.form.userCost.minValue">- En az 1000</div>
          <div class="error" v-if="!$v.form.userCost.maxValue">- En fazla 1.000.000</div>
        </div>
      </div>


      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">KREDİ TUTARI</a>
          <input v-model="form.userCredit"
                 class="main-contain-top-in-input">
          <div class="error" v-if="!$v.form.userCredit.required">- Bu alan gereklidir.</div>
        </div>
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">VADE</a>
          <select v-model="form.userExpire" class="main-contain-top-in-select">

            <template v-for="expire in Object.keys(EXPIRE)">
              <option class="main-contain-top-in-select-option" :value="EXPIRE[expire].VALUE">
                {{ EXPIRE[expire].TEXT }}
              </option>
            </template>
          </select>
          <div class="error" v-if="!$v.form.userExpire.required">- Bu alan gereklidir.</div>
        </div>
      </div>
      <div class="fd">
        <button class="main-contain-top-button">Devam Et</button>
      </div>
    </form>

  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength,maxValue,minValue} from 'vuelidate/lib/validators'
import {EXPIRE} from "@/expire";

const nameValidations = (value) => {
  return /^[a-z]/.test(value)
}
const surnameValidations = (value) => {
  return /^[a-z]/.test(value)
}
const identityValidations = (value) => {
  return /^[0-9]/.test(value)
}
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
      userIdentity:{
        required,
        identityValidations,
        minLength:minLength(11),
        maxLength:maxLength(11),
      },
      userCost: {
        required,
        costValidation,
        minValue: minValue(1000),
        maxValue:maxValue(100000000),
      },
      userCredit:{
        required,
        creditValidation,
      },
      userExpire:{
        required,
        expireValidations,
      }


    }

  },
  props: {
    addBookFormData: {
      type: Object,
      default: null,
    },
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
  mounted() {
    if (this.addBookFormData) {
      this.form = this.addBookFormData;
    }
  },

}
</script>

<style scoped>
.error{
  color: red;
}
.fd {
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
        display: flex;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        display: flex;
        width: 480px;
        margin-top: 22px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
        height: 43px;
        background-color: rgb(94, 114, 228);
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: white;
      }

      &-in {
        display: flex;
        flex-direction: column;

        &-select {
          height: 45px;
          border-radius: 4px;
          border: 1px solid #CAD1D7;
          margin-top: 13px;
          width: 225px;
          padding-left: 13px;
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          color: #8898AA;
        }

        &-label {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.431667px;
          color: #525F7F;
          margin-top: 13px;
        }

        &-input {
          height: 43px;
          border-radius: 4px;
          border: 1px solid #cad1d7;
          margin-top: 13px;
          padding-left: 13px;
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          color: #0072ff;
          width: 210px;
        }
      }

    }
  }
}
</style>