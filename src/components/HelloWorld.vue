<template>
  <div class="main">
    <div class="head">
      <div class="filter-item long">
        <div class="label">角色选择</div>
        <el-select v-model="cur_checked_characters" placeholder="选择角色" multiple collapse-tags filterable clearable
          @change="handleFilter">
          <el-option v-for="item in _characters" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </div>
      <div class="filter-item">
        <div class="label">技能模式</div>
        <el-select v-model="cur_skill_type" placeholder="选择技能模式" clearable @change="handleFilter">
          <el-option v-for="item in skill_type" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="filter-item">
        <div class="label">技能类型</div>
        <el-select v-model="cur_skill_type2" placeholder="选择技能类型" clearable @change="handleFilter">
          <el-option v-for="item in skill_type2" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="filter-item">
        <div class="label">技能属性</div>
        <el-select v-model="cur_skill_element" placeholder="选择技能属性" clearable @change="handleFilter">
          <el-option v-for="item in skill_elements" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="filter-item long">
        <div class="label">原技能消耗</div>
        <el-input-number class="sp-input" v-model="searchSpRange.oMinSp" size="small" step-strictly :step="1" :min="1"
          :max="searchSpRange.oMaxSp" @change="handleFilter"></el-input-number>
        <el-input-number class="sp-input" v-model="searchSpRange.oMaxSp" size="small" step-strictly :step="1"
          :min="searchSpRange.oMinSp" :max="99" @change="handleFilter"></el-input-number>
      </div>
      <div class="filter-item long">
        <div class="label">实际技能消耗级别</div>
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
      <div class="filter-item">
        <div class="label">是否有次数限制</div>
        <el-select v-model="cur_skill_use" placeholder="全部" clearable @change="handleFilter">
          <el-option v-for="item in skill_use" :key="item.value" :label="item.label" :value="item.value">
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
            <span>{{ getCharacterName(row.label) }}</span>
            <br>
            <span>{{ row.team }}</span>
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

const $t = useI18n().t

const cur_skill_type = ref('')

const cur_checked_characters = ref([])

const cur_skill_type2 = ref('')

const cur_skill_element = ref('')

const cur_skill_use = ref('')

const searchSpRange = ref({
  oMinSp: 4,
  oMaxSp: 20,
  minSp: 4,
  maxSp: 20,
  remark: ''
})

const skill_type = [{ value: 'All', label: '群体' }, { value: 'Single', label: '单体' }]

const skill_type2 = [{ value: 'Slash', label: '斩' }, { value: 'Stab', label: '突' }, { value: 'Strike', label: '打' }]

const skill_elements = [{ value: 'Fire', label: '火' }, { value: 'Ice', label: '冰' }, { value: 'Thunder', label: '雷' }, { value: 'Light', label: '光' }, { value: 'Dark', label: '暗' }, { value: 'None', label: '无' }]

const skill_remark = [{ value: '平平无奇', label: '平平无奇' }, { value: '超模', label: '超模' }, { value: '低模', label: '低模' }]

const skill_use = [{ value: -1, label: '无限制' }, { value: 1, label: '有限制' }]

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

const skill_filter = ['AttackSkill', 'SkillCondition']
function hasIntersection(arr1, arr2 = skill_filter) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item)).length > 0;
}

const init = () => {
  // 角色筛选
  if (cur_checked_characters.value && cur_checked_characters.value.length) {
    characters.value = _characters.filter(f => cur_checked_characters.value.includes(f.id))
  } else {
    characters.value = _characters
  }

  characters.value = characters.value.map(m => {
    let cards = m.cards
    // 攻击方式筛选
    if (cur_skill_type2.value) {
      cards = cards?.filter(f => f.type === cur_skill_type2.value)
    }

    if(cards.length === 0) {
      return m
    }

    // 从角色信息中获取技能信息
    let character_skills = cards?.reduce((init, cur) => {
      // TODO SkillCondition 条件技能 AttackSkill 攻击技能
      let r = cur?.skills.filter(f => f.e.some(s => hasIntersection(s)))
      init.push(...r)
      return init
    }, [])

    let b_skills_obj = {}
    let b_skills_remark = {}

    // 技能计数
    let count = 0
    for (const index in character_skills) {
      const character_skill = character_skills[index]
      const skill_msg = _skills.find(f => f.id === character_skill.i)
      if (skill_msg === undefined) {
        console.warn(character_skill);
      }

      let part = skill_msg?.parts[0]

      const get_skill = (_part) => {
        // 技能模型计算
        if (_part) {
          const model = singleAttackSkillModel(_part.target_type, _part.power[1], skill_msg.sp_cost)
          // 筛选条件
          const flag = (skill_msg.sp_cost >= searchSpRange.value.oMinSp
            && skill_msg.sp_cost <= searchSpRange.value.oMaxSp
            && model.val >= searchSpRange.value.minSp
            && model.val <= searchSpRange.value.maxSp
            && (model.remark === searchSpRange.value.remark || !searchSpRange.value.remark)
            && (!cur_skill_type.value || _part.target_type === cur_skill_type.value)
            && (!cur_skill_use.value || (cur_skill_use.value > 0) === !!_part.use_count)
            && (!cur_skill_element.value || _part.elements.includes(cur_skill_element.value))
          )

          if (flag) {
            const b_skill_key = `skill_${count + 1}`
            const skill_name = $t(`skill.name.${skill_msg.label}`)
            b_skills_obj[b_skill_key] = `${skill_name} - ${skill_msg.sp_cost}sp （${model.val}sp）`
            const b_skill_remark_key = `skill_${count + 1}_remark`
            b_skills_remark[b_skill_remark_key] = model.remark
            count++
          }
        } else {
          console.warn(character_skill);
        }
      }

      // 条件技能
      if (part.skill_type === 'SkillCondition') {
        const strval = part.strval
        for (const s of strval) {
          part = s.parts[0]
          if(skill_filter.includes(part.skill_type) && (!cur_skill_element.value || part.elements.includes(cur_skill_element.value))) {
            get_skill(part)
          }
        }
      } else {
        get_skill(part)
      }
    }

    return { ...m, ...b_skills_obj, ...b_skills_remark }
  })

  characters.value = characters.value.filter(f => {
    return Object.keys(f).some(s => s.match(/^skill_/))
  })
  // console.log(characters.value)
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
:deep(.remark) {
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
  width: 140px;
}

.filter-item.long {
  width: 240px;
}

.filter-item :deep(.el-select__selection) {
  flex-wrap: nowrap;
}

.filter-item+.filter-item {
  margin-left: 12px;
}

.sp-input {
  width: 100px;
  margin: 0 2px;
}

.table-box {
  height: 0;
  flex-grow: 1;
}
</style>