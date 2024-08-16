<template>
  <div class="main">
    <div class="head">
      <div class="filter-item">
        <div class="label">技能模式</div>
        <el-select v-model="cur_skill_type" placeholder="选择技能模式" clearable @change="handleFilter">
          <el-option v-for="item in skill_type" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="filter-item">
        <div class="label">原技能消耗</div>
        <el-input-number class="sp-input" v-model="searchSpRange.oMinSp" size="small" step-strictly :step="1" :min="1"
          :max="searchSpRange.oMaxSp" @change="handleFilter"></el-input-number>
        <el-input-number class="sp-input" v-model="searchSpRange.oMaxSp" size="small" step-strictly :step="1"
          :min="searchSpRange.oMinSp" :max="99" @change="handleFilter"></el-input-number>
      </div>
      <div class="filter-item">
        <div class="label">实际技能消耗</div>
        <el-input-number class="sp-input" v-model="searchSpRange.minSp" size="small" step-strictly :step="1" :min="1"
          :max="searchSpRange.maxSp" @change="handleFilter"></el-input-number>
        <el-input-number class="sp-input" v-model="searchSpRange.maxSp" size="small" step-strictly :step="1"
          :min="searchSpRange.minSp" :max="99" @change="handleFilter"></el-input-number>
      </div>
      <div class="filter-item">
        <div class="label">技能评价</div>
        <el-select v-model="searchSpRange.remark" placeholder="技能评价" clearable @change="handleFilter">
          <el-option v-for="item in skill_remark" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <div class="table-box">
      <el-table :data="characters" stripe height="100%" row-key="id">
        <el-table-column type="expand">
          <template #default="{ row }">
            <Card :data="row" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称">
          <template #default="{ row }">
            {{ getCharacterName(row.label) }}
          </template>
        </el-table-column>
        <el-table-column prop="skill_1" label="技能1" :formatter="(_, __, val) => val || '-'"></el-table-column>
        <el-table-column class-name="remark" prop="skill_1_remark" label="我的评价是"
          :formatter="(_, __, val) => val || '技能在哪呢'"></el-table-column>
        <el-table-column prop="skill_2" label="技能2" :formatter="(_, __, val) => val || '-'"></el-table-column>
        <el-table-column class-name="remark" prop="skill_2_remark" label="我的评价是"
          :formatter="(_, __, val) => val || '技能在哪呢'"></el-table-column>
        <el-table-column prop="skill_3" label="技能3" :formatter="(_, __, val) => val || '-'"></el-table-column>
        <el-table-column class-name="remark" prop="skill_3_remark" label="我的评价是"
          :formatter="(_, __, val) => val || '技能在哪呢'"></el-table-column>
        <el-table-column prop="skill_4" label="技能4" :formatter="(_, __, val) => val || '-'"></el-table-column>
        <el-table-column class-name="remark" prop="skill_4_remark" label="我的评价是"
          :formatter="(_, __, val) => val || '技能在哪呢'"></el-table-column>
        <el-table-column prop="skill_5" label="技能5" :formatter="(_, __, val) => val || '-'"></el-table-column>
        <el-table-column class-name="remark" prop="skill_5_remark" label="我的评价是"
          :formatter="(_, __, val) => val || '技能在哪呢'"></el-table-column>
        <el-table-column prop="skill_6" label="技能6" :formatter="(_, __, val) => val || '-'"></el-table-column>
        <el-table-column class-name="remark" prop="skill_6_remark" label="我的评价是"
          :formatter="(_, __, val) => val || '技能在哪呢'"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from "vue3-i18n";
import _skills from '@/assets/data/skills.js';
import _characters from '@/assets/data/characters'
import Card from './characterCard.vue'

// eslint-disable-next-line no-unused-vars
const $t = useI18n().t

const cur_skill_type = ref('')

const searchSpRange = ref({
  oMinSp: 4,
  oMaxSp: 20,
  minSp: 4,
  maxSp: 20,
  remark: ''
})

const skill_type = [{ value: 'All', label: '群体' },
{ value: 'Single', label: '单体' }]

const skill_remark = [{ value: '平平无奇', label: '平平无奇' }, { value: '超模', label: '超模' }, { value: '低模', label: '低模' }]

const singleAttackSkillModel = (type, maxDamage, spNumber) => {
  const d = Number(maxDamage)
  const sp = Number(spNumber)
  const r = Math.sqrt((d - 750) / (type === 'All' ? 45 : 60))
  const remark = () => {
    if (sp === r) {
      return '平平无奇'
    } else if (sp > r) {
      return '低模'
    } else if (sp < r) {
      return '超模'
    } else {
      return '哪里出了问题？'
    }
  }
  return { val: r, remark: remark() }
}

let characters = ref(_characters)

const init = () => {
  console.log(searchSpRange.value.oMinSp);

  characters.value = characters.value.map(m => {
    let character_skills = m.cards?.reduce((init, cur) => {
      // TODO
      let r = cur?.skills.filter(f => f.e[0].includes('AttackSkill'))

      if (cur_skill_type.value) {
        r = r?.filter(f => f.e[0].includes(cur_skill_type.value))
      }
      init.push(...r)
      return init
    }, [])

    let b_skills_obj = {}
    let b_skills_remark = {}

    for (const index in character_skills) {
      const character_skill = character_skills[index]
      const skill_msg = _skills.find(f => f.id === character_skill.i)
      if (skill_msg === undefined) {
        console.warn(character_skill);
      }
      const part = skill_msg?.parts[0]
      // 技能模型计算
      if (part) {
        const model = singleAttackSkillModel(part.target_type, part.power[1], skill_msg.sp_cost)
        // 筛选条件
        const flag = (skill_msg.sp_cost >= searchSpRange.value.oMinSp
          && skill_msg.sp_cost <= searchSpRange.value.oMaxSp
          && model.val >= searchSpRange.value.minSp
          && model.val <= searchSpRange.value.maxSp
          && model.remark === searchSpRange.value.remark || !searchSpRange.value.remark)

        const b_skill_key = `skill_${Number(index) + 1}`
        const skill_name = $t(`skill.name.${skill_msg.label}`)
        b_skills_obj[b_skill_key] = flag ? `${skill_name} - ${skill_msg.sp_cost}sp （${model.val}sp）` : undefined
        const b_skill_remark_key = `skill_${Number(index) + 1}_remark`
        b_skills_remark[b_skill_remark_key] = flag ? model.remark : undefined
      } else {
        console.warn(character_skill);
      }

    }

    return { ...m, ...b_skills_obj, ...b_skills_remark }
  })
  console.log(characters);


}

init()

const handleFilter = () => {
  init()
}

const getCharacterName = (val) => {
  if (!val) {
    return ''
  }

  // lastname middlename firstname
  const lastname = 'character.lastname.' + val
  const middlename = 'character.middlename.' + val
  const firstname = 'character.firstname.' + val
  return $t(lastname) + ' ' + $t(middlename) + ' ' + $t(firstname)
}

</script>

<style scoped>
::v-deep .remark {
  color: #f51c77
}

.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.head {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.label {
  text-align: center;
  color: #425470;
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: bold;
}

.filter-item {
  width: 240px;
}

.filter-item+.filter-item {
  margin-left: 12px;
}

.sp-input {
  width: 80px;
  margin: 0 2px;
}

.table-box {
  height: 0;
  flex-grow: 1;
}
</style>