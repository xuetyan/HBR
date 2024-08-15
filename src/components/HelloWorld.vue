<template>
  <div class="main">
    <div class="head"></div>
    <el-table :data="characters" stripe>
      <el-table-column type="expand">
        <template #default="row">
          <Card :data="row" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
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
</template>

<script setup>
import { ref } from 'vue'
import _skills from '@/assets/data/skills.js';
import _characters from '@/assets/data/characters'
import Card from './characterCard.vue'

// eslint-disable-next-line no-unused-vars
const skill_type = [{ val: 'All', label: '群体' },
{ val: 'Single', label: '单体' }]

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

let characters = _characters

const init = () => {
  characters = characters.map(m => {
    let character_skills = m.cards?.reduce((init, cur) => {
      // TODO
      init.push(...cur?.skills.filter(f => f.e[0].includes('AttackSkill')))
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
        const b_skill_key = `skill_${Number(index) + 1}`
        b_skills_obj[b_skill_key] = `${skill_msg.name} - ${skill_msg.sp_cost}sp （${model.val}sp）`
        const b_skill_remark_key = `skill_${Number(index) + 1}_remark`
        b_skills_remark[b_skill_remark_key] = model.remark
      } else {
        console.warn(character_skill);
      }

    }

    return { ...m, ...b_skills_obj, ...b_skills_remark }
  })

  characters = ref(characters)
}

init()

</script>

<style scoped>
::v-deep .remark {
  color: #f51c77
}

.main {
  display: flex;
}
</style>