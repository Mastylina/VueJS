<template>
  <b-container class="form">
    <div class="d-flex">
      <b-col class="form_col form-input">
        <b-form @submit="onSubmit">
        <div>
          <!--Профессия-->
            <b-form-group
              :label="form.profession.label+':'"
            >
             <b-form-input
                v-model="form.profession.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Город-->
            <b-form-group
              :label="form.city.label+':'"
            >
             <b-form-input
                v-model="form.city.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Фотография-->
            <b-form-group
              :label="form.foto.label+':'"
            >
             <b-form-input
                v-model="form.foto.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--ФИО-->
            <b-form-group
              :label="form.full_name.label+':'"
            >
             <b-form-input
                v-model="form.full_name.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Номер телефона-->
            <b-form-group
              :label="form.phone.label+':'"
            >
             <b-form-input
                v-model="form.phone.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Email адрес-->
            <b-form-group
              :label="form.email.label+':'"
            >
             <b-form-input
                v-model="form.email.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Дата рождения-->
            <b-form-group
              :label="form.date.label+':'"
            >
            <b-form-datepicker
                v-model="form.date.values"
                type="text"
              ></b-form-datepicker>
            </b-form-group>
        </div>
        <div>
          <!--Образование-->
            <b-form-group
              :label="form.education.label+':'"
            >
          <select
            v-model="form.education.values"
          >
            <option>Среднее</option>
            <option>Среднее специальное</option>
            <option>Неоконченное высшее</option>
            <option>Высшее</option>
          </select>
            </b-form-group>
        </div>
        <template v-if="form.education.values !== 'Среднее' && form.education.values !== ''" > 
        <div>
          <!--Учебное заведение-->
            <b-form-group
              :label="form.educational_institution.label+':'"
            >
             <b-form-input
                v-model="form.educational_institution.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Факультет-->
            <b-form-group
              :label="form.faculty.label+':'"
            >
             <b-form-input
                v-model="form.faculty.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Специализация-->
            <b-form-group
              :label="form.specialization.label+':'"
            >
             <b-form-input
                v-model="form.specialization.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Год окончания-->
            <b-form-group
              :label="form.year_ending.label+':'"
            >
             <b-form-input
                v-model="form.year_ending.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        </template>
        <div>
          <!--Желаемая зарплата-->
            <b-form-group
              :label="form.desired_salary.label+':'"
            >
             <b-form-input
                v-model="form.desired_salary.values"
                type="text"
              ></b-form-input>
            </b-form-group>
        </div>
        <div>
          <!--Ключевые навыки-->
            <b-form-group
              :label="form.key_skills.label+':'"
            >
            <b-form-textarea
                v-model="form.key_skills.values"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
            </b-form-group>
        </div>
        <div>
          <!--О себе-->
            <b-form-group
              :label="form.information_about.label+':'"
            >
            <b-form-textarea
                v-model="form.information_about.values"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
            </b-form-group>
        </div>

        <b-alert v-if="errors.length" show variant="danger">
          <b>Номер телефона введён неверно</b>
        </b-alert>
            <div class="d-flex justify-content-around">
              <b-button type="submit" variant="primary">Применить</b-button>
            </div>
          </b-form>
      </b-col>
      <b-col class="form_col form-output">
        <h2 class="text-center">Резюме</h2>
          <div class="d-flex justify-content-center">
            <img v-if="showResume" :src="form.foto.values" alt="" class="img_size">
          </div>
          <p class="mb-2" v-for="(f,index) in form" :key="index">
            <template v-if="f.label !== 'Ссылка на фото'">
              <template v-if="(form.education.values === 'Среднее' || 
              form.education.values === '') && 
              (f.label === form.educational_institution.label || 
              f.label === form.faculty.label ||
              f.label === form.specialization.label || 
              f.label === form.year_ending.label)">
              </template>
              <template v-else>
                {{f.label}}:
              </template>
              <template v-if="showResume">
                {{f.values}}
              </template>
            </template>
          </p>
      </b-col>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      errors:[],
      form: {
        foto: {label:'Ссылка на фото', values: 'https://bez-makiyazha.ru/wp-content/uploads/2020/07/KERRI_Dzhim15.jpg'},
        profession: {label:'Профессия', values: ''},
        city: {label:'Город', values: ''},
        full_name: {label:'ФИО', values: ''},
        phone: {label:'Номер телефона', values: ''},
        email: {label:'Email', values: ''},
        date: {label:'Дата рождения', values: ''},
        education: {label:'Образование', values: ''},
        educational_institution: {label:'Учебное заведение', values: ''},
        faculty: {label:'Факультет', values: ''},
        specialization: {label:'Специализация', values: ''},
        year_ending: {label:'Год окончания', values: ''},
        desired_salary: {label:'Желаемая зарплата', values: ''},
        key_skills: {label:'Ключевые навыки', values: ''},
        information_about: {label:'О себе', values: ''},
      },
      showResume: false
    }
  },
  methods: {
    onSubmit(event) {
      this.errors =[];
      let regTel = new RegExp('\\d{'+this.form.phone.values.length +'}', 'gim');
      if(this.form.phone.values.length < 6 || this.form.phone.values.length > 10 || !regTel.test(this.form.phone.values)) {
        this.errors.push('Не корректно заполнен номер телефона, он должен состоять от 6 до 10 символов, и содержать только цифры');
      }
      if(!this.errors.length)
        this.showResume = true;
      else
        this.showResume = false;
       event.preventDefault();
    },
  },
}
</script>

<style scoped>
.form_col {
  padding: 20px 100px 20px 100px;
}
.img_size {
  max-width: 250px;
  max-height: 250px;
}
</style>