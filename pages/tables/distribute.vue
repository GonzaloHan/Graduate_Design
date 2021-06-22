<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '85px 20px 0', overflow: 'initial' }">
          <div :style="{ padding: '16px', background: '#fff', textAlign: 'center',height:'568px' }">
            <a-row>
              <span class="labelhead">人群包采集</span>
            </a-row>
            <br>
            <a-row>
              <el-steps :active="active" :space="150" align-center finish-status="success" style="margin-left: 324px;text-align: left">
                <el-step title="基本属性"></el-step>
                <el-step title="人口标签"></el-step>
                <el-step title="兴趣爱好"></el-step>
                <el-step title="点击行为"></el-step>
              </el-steps>
              <br>
              <!--基本属性-->
              <div v-if="active === 0" style="height: 336px ;width:84%; border:dashed 2px #4f99ff;border-radius: 10px; margin-left: 100px;padding: 16px">
                <a-row>
                  <span class="innerlabel">性别：</span>
                  <el-checkbox-group v-model="model3" style="margin-left: 12px;margin-top:2px;float: left" >
                    <el-checkbox label="model3_b1"><i class="el-icon-male"></i> 男</el-checkbox>
                    <el-checkbox label="model3_b2"><i class="el-icon-female"></i> 女</el-checkbox>
                    <el-checkbox label="model3_b3"><i class="el-icon-more-outline"></i> 未知</el-checkbox>
                  </el-checkbox-group>
                </a-row>
                <a-row style="margin-top: 16px">
                  <span class="innerlabel">年龄：</span>
                  <el-input v-model="age_min" size="mini" @input="min_input" style="width: 60px;float: left; margin-left: 12px" prefix-icon="el-icon-upload2"/>
                  <span style="color: #d7d7d7; float: left; font-weight: bold ;font-size: 16px;margin-left: 16px">—</span>
                  <el-input v-model="age_max" size="mini" @input="max_input" style="width: 60px;float: left; margin-left: 16px" suffix-icon="el-icon-download"/>
                  <el-slider v-model="age_value" @input="slide_input" style="margin-top: 36px; margin-left: 60px; margin-right: 60px" range :marks="age_marks" :max="80"></el-slider>
                </a-row>
                <a-row style="margin-top: 30px">
                  <span class="innerlabel">地点：</span>
                  <el-cascader
                          placeholder="请选择人群所在地"
                          :options="location"
                          :props="props"
                          size="mini"
                          collapse-tags
                          clearable
                          style="float: left;margin-left: 12px;width: 908px">
                  </el-cascader>
                </a-row>
              </div>
              <!--人口标签-->
              <div v-if="active === 1" style="height: 336px ;width:84%; border:dashed 2px #4f99ff;border-radius: 10px; margin-left: 100px;padding: 16px">
                <a-row>
                  <span class="innerlabel">可选标签：</span>
                  <a-col style="height: 170px ; width: 930px;margin-left: 12px; background: rgba(196,196,196,0.14); ;border-radius: 10px;float: left">
                    <draggable
                            class="dragArea list-group"
                            :list="list1"
                            :group="{ name: 'people', pull: 'clone', put: false }"
                            @change="log">
                      <el-tag
                              class="list-group-item"
                              v-for="element in list1"
                              :key="element.name"
                              size="medium"
                              effect="dark"
                              style="float: left; margin-left: 12px;margin-top: 12px; border-radius: 50px">
                        {{ element.name }}
                      </el-tag>
                    </draggable>
                  </a-col>
                </a-row>
                <br>
                <a-row>
                  <span class="innerlabel">已选标签：</span>
                  <a-col style="height: 104px ; width: 930px;margin-left: 12px; background: rgba(196,196,196,0.14);border-radius: 10px;float: left">
                    <draggable
                            class="dragArea list-group"
                            :list="list2"
                            group="people"
                            @change="log">
                      <el-tag
                              class="list-group-item"
                              v-for="element in list2"
                              :key="element.name"
                              size="medium"
                              effect="dark"
                              closable
                              @close="close_it(element.name)"
                              disable-transitions="true"
                              style="float: left; margin-left: 12px;margin-top: 12px; border-radius: 50px">
                        {{ element.name }}
                      </el-tag>
                    </draggable>
                  </a-col>
                </a-row>
              </div>
              <!--兴趣爱好-->
              <div v-if="active === 2" style="height: 336px ;width:84%; border:dashed 2px #4f99ff;border-radius: 10px; margin-left: 100px;padding: 16px">
                <a-row>
                  <span class="innerlabel">兴趣分类：</span>
                  <el-checkbox-group v-model="checkboxGroup1" max="2" size="mini" style="margin-left: 12px;float: left">
                    <el-checkbox-button v-for="category in categories" :label="category" :key="category">{{category}}</el-checkbox-button>
                  </el-checkbox-group>
                  <span style="font-size: 16px;font-weight: lighter;float: left; font-style: italic;margin-left: 12px;color: #d7d7d7;">（最多选择两种分类）</span>
                </a-row>
                <br>
                <a-row>
                  <div class="innerlabel">兴趣行为：</div>
                  <a-col v-if="this.checkboxGroup1.indexOf('视频') != -1">
                    <span class="innerlabel" style="margin-left:92px;float: left">视频：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input1"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select1" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="1"></el-option>
                          <el-option label="过去一周" value="2"></el-option>
                          <el-option label="过去三天" value="3"></el-option>
                        </el-select>
                        <el-select v-model="select2" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="4"></el-option>
                          <el-option label="未使用过" value="5"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup2" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input2"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup2.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select3" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="6"></el-option>
                          <el-option label="过去一周" value="7"></el-option>
                          <el-option label="过去三天" value="8"></el-option>
                        </el-select>
                        <el-select v-model="select4" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="9"></el-option>
                          <el-option label="未使用过" value="10"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup2.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select5" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select6" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                  <a-col v-if="this.checkboxGroup1.indexOf('体育') != -1">
                    <span class="innerlabel" style="margin-left: 92px;float: left">体育：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input3"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select7" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="11"></el-option>
                          <el-option label="过去一周" value="12"></el-option>
                          <el-option label="过去三天" value="13"></el-option>
                        </el-select>
                        <el-select v-model="select8" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="14"></el-option>
                          <el-option label="未使用过" value="15"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup3" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input4"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup3.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select9" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="16"></el-option>
                          <el-option label="过去一周" value="17"></el-option>
                          <el-option label="过去三天" value="18"></el-option>
                        </el-select>
                        <el-select v-model="select10" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="19"></el-option>
                          <el-option label="未使用过" value="20"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup3.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select11" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select12" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                  <a-col v-if="this.checkboxGroup1.indexOf('金融') != -1">
                    <span class="innerlabel" style="margin-left: 92px;float: left">金融：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input5"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select13" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="21"></el-option>
                          <el-option label="过去一周" value="22"></el-option>
                          <el-option label="过去三天" value="23"></el-option>
                        </el-select>
                        <el-select v-model="select14" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="24"></el-option>
                          <el-option label="未使用过" value="25"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup4" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input6"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup4.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select15" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="26"></el-option>
                          <el-option label="过去一周" value="27"></el-option>
                          <el-option label="过去三天" value="28"></el-option>
                        </el-select>
                        <el-select v-model="select16" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="29"></el-option>
                          <el-option label="未使用过" value="30"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup4.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select17" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select18" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                  <a-col v-if="this.checkboxGroup1.indexOf('育儿') != -1">
                    <span class="innerlabel" style="margin-left: 92px;float: left">育儿：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input7"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select19" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="31"></el-option>
                          <el-option label="过去一周" value="32"></el-option>
                          <el-option label="过去三天" value="33"></el-option>
                        </el-select>
                        <el-select v-model="select20" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="34"></el-option>
                          <el-option label="未使用过" value="35"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup5" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input8"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup5.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select21" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="36"></el-option>
                          <el-option label="过去一周" value="37"></el-option>
                          <el-option label="过去三天" value="38"></el-option>
                        </el-select>
                        <el-select v-model="select22" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="39"></el-option>
                          <el-option label="未使用过" value="40"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup5.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select23" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select24" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                  <a-col v-if="this.checkboxGroup1.indexOf('教育') != -1">
                    <span class="innerlabel" style="margin-left: 92px;float: left">教育：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input9"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select25" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="41"></el-option>
                          <el-option label="过去一周" value="42"></el-option>
                          <el-option label="过去三天" value="43"></el-option>
                        </el-select>
                        <el-select v-model="select26" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="44"></el-option>
                          <el-option label="未使用过" value="45"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup6" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input10"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup6.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select27" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="46"></el-option>
                          <el-option label="过去一周" value="47"></el-option>
                          <el-option label="过去三天" value="48"></el-option>
                        </el-select>
                        <el-select v-model="select28" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="49"></el-option>
                          <el-option label="未使用过" value="50"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup6.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select29" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select30" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                  <a-col v-if="this.checkboxGroup1.indexOf('工具') != -1">
                    <span class="innerlabel" style="margin-left: 92px;float: left">工具：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input11"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select31" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="61"></el-option>
                          <el-option label="过去一周" value="62"></el-option>
                          <el-option label="过去三天" value="63"></el-option>
                        </el-select>
                        <el-select v-model="select32" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="64"></el-option>
                          <el-option label="未使用过" value="65"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup7" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input12"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup7.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select33" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="66"></el-option>
                          <el-option label="过去一周" value="67"></el-option>
                          <el-option label="过去三天" value="68"></el-option>
                        </el-select>
                        <el-select v-model="select34" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="69"></el-option>
                          <el-option label="未使用过" value="70"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup7.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select35" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select36" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                  <a-col v-if="this.checkboxGroup1.indexOf('电商') != -1">
                    <span class="innerlabel" style="margin-left: 92px;float: left">电商：</span>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input13"
                            style="width: 878px"
                            size="mini"
                    >
                      <template #prepend>
                        <el-select v-model="select37" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="71"></el-option>
                          <el-option label="过去一周" value="72"></el-option>
                          <el-option label="过去三天" value="73"></el-option>
                        </el-select>
                        <el-select v-model="select38" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="74"></el-option>
                          <el-option label="未使用过" value="75"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- 或&非&No-->
                    <el-checkbox-group v-model="checkboxGroup8" max="1" size="mini" style="margin-top: 8px;margin-left: 144px;float: left">
                      <el-checkbox-button v-for="logic in logics" :label="logic" :key="logic">{{logic}}</el-checkbox-button>
                    </el-checkbox-group>
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input14"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            v-if="checkboxGroup8.indexOf('不填写') === -1"
                    >
                      <template #prepend>
                        <el-select v-model="select39" placeholder="请选择时间范围" style="width:150px">
                          <el-option label="过去一个月" value="76"></el-option>
                          <el-option label="过去一周" value="77"></el-option>
                          <el-option label="过去三天" value="78"></el-option>
                        </el-select>
                        <el-select v-model="select40" placeholder="请选择动作" style="margin-left:20px;width:120px">
                          <el-option label="使用过" value="79"></el-option>
                          <el-option label="未使用过" value="80"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                    <!-- disabled-->
                    <el-input
                            placeholder="请输入App名称(以；隔开)"
                            v-model="input"
                            style="width: 878px;margin-left: 140px;margin-top: 8px"
                            size="mini"
                            disabled
                            v-if="checkboxGroup8.indexOf('不填写') != -1"
                    >
                      <template #prepend>
                        <el-select v-model="select41" placeholder="请选择时间范围" style="width:150px" disabled>
                        </el-select>
                        <el-select v-model="select42" placeholder="请选择动作" style="margin-left:20px;width:120px" disabled>
                        </el-select>
                      </template>
                    </el-input>
                    <br><br>
                  </a-col>
                </a-row>
              </div>
              <!--点击行为-->
              <div v-if="active === 3" style="height: 336px ;width:84%; border:dashed 2px #4f99ff;border-radius: 10px; margin-left: 100px;padding: 16px">
                <a-row>
                  <span class="innerlabel">展现形式：</span>
                  <el-checkbox-group v-model="checkboxGroup9" max="1" size="mini" style="margin-left: 12px;float: left">
                    <el-checkbox-button v-for="show_type in show_types" :label="show_type" :key="show_type">{{show_type}}</el-checkbox-button>
                  </el-checkbox-group>
                  <span style="font-size: 16px;font-weight: lighter;float: left; font-style: italic;margin-left: 12px;color: #d7d7d7;">（最多选择一种展现形式）</span>
                </a-row>
                <br>
                <a-row>
                  <span class="innerlabel">历史行为：</span>
                  <el-input
                          placeholder="请输入次数(只输入数字即可)"
                          v-model="input15"
                          style="width: 930px;float: left;margin-left: 12px"
                          size="mini"
                  >
                    <template #prepend>
                      <el-select v-model="select43" placeholder="请选择时间范围" style="width:160px">
                        <el-option label="过去一个月" value="81"></el-option>
                        <el-option label="过去一周" value="82"></el-option>
                        <el-option label="过去三天" value="83"></el-option>
                      </el-select>
                      <el-select v-model="select44" placeholder="请选择动作" style="margin-left:20px;width:176px">
                        <el-option label="未收到" value="84"></el-option>
                        <el-option label="收到未点击" value="85"></el-option>
                        <el-option label="点击" value="86"></el-option>
                      </el-select>
                    </template>
                  </el-input>
                  <br>
                  <a-row v-if="this.select44 === '85' || this.select44 ==='86' ">
                    <span class="innerlabel" style="margin-top: 16px">接收区间：</span>
                    <el-input v-model="time_min" size="mini" @input="time_min_input" style="width: 60px;float: left; margin-left: 12px;margin-top: 16px" prefix-icon="el-icon-upload2"/>
                    <span style="color: #d7d7d7; float: left; font-weight: bold ;font-size: 16px;margin-left: 16px;margin-top: 16px">—</span>
                    <el-input v-model="time_max" size="mini" @input="time_max_input" style="width: 60px;float: left; margin-left: 16px;margin-top: 16px" suffix-icon="el-icon-download"/>
                    <el-slider v-model="time_value" @input="time_slide_input" style="margin-top: 64px; margin-left: 92px; margin-right: 6px" range :marks="time_marks" :max="12"></el-slider>
                  </a-row>
                  <span class="innerlabel" style="margin-top: 16px">预计总人数：</span>
                  <span class="innerlabel" style="margin-left: -6px;margin-top: 16px">{{total_people}}人</span>
                </a-row>
              </div>
              <br>
              <el-button v-if="active === 0" type="primary" disabled icon="el-icon-arrow-left" style="float:left ; margin-left: 100px;border-radius: 8px">上一维度</el-button>
              <el-button v-if="active !== 0" type="primary" @click="click_before" icon="el-icon-arrow-left" style="float:left ; margin-left: 100px;border-radius: 8px">上一维度</el-button>
              <el-button v-if="active !== 3" type="primary" @click="click_after" style="float: right;margin-right: 100px;border-radius: 8px">下一维度<i class="el-icon-arrow-right el-icon--right"></i></el-button>
              <el-button v-if="active === 3" type="primary" @click="click_finish" style="float: right;margin-right: 100px;border-radius: 8px">立即生成<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </a-row>
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          准星系统 Copyright © 2021 杨屹涵 - 17301054 版权所有
        </a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
  import MainMenu from "../../components/mainMenu/mainMenu";
  import "../../api/api";
  import swal from "sweetalert";
  import draggable from "vuedraggable"

  const data=[];

  var Min_age = '18';
  var Max_age = '48';
  var Min_time = '2';
  var Max_time = '6';

  export default {

    components: {
      MainMenu,
      draggable
    },

    data() {
      return {
        total_people:318769,
        model3:[],
        active:0,
        personID:'PP0002',
        age_min:'18',
        age_max:'48',
        time_min:'2',
        time_max:'6',
        age_listen:'',
        age_value:[parseInt(Min_age),parseInt(Max_age)],
        time_value:[parseInt(Min_time),parseInt(Max_time)],
        age_marks:{
          18:'18',
          24:'24',
          48:'48',
          65:'65'
        },
        time_marks:{
          3:'3',
          6:'6',
          9:'9',
        },
        props: { multiple: true },
        location:[
          {
            value:1,
            label:'中国大陆',
            children:[
              {
              value:2,
              label: '一线城市',
              children: [
                {value:3, label: '北京'},
                {value:4, label: '上海'},
                {value:5, label: '广州'},
                {value:6, label: '深圳'}]
              },
              {
                value:7,
                label: '新一线城市',
                children: [
                  {value:8,  label: '成都'},
                  {value:9,  label: '杭州'},
                  {value:10, label: '重庆'},
                  {value:11, label: '武汉'},
                  {value:12, label: '西安'},
                  {value:13, label: '苏州'},
                  {value:14, label: '天津'},
                  {value:15, label: '南京'},
                  {value:16, label: '长沙'},
                  {value:17, label: '郑州'},
                  {value:18, label: '东莞'},
                  {value:19, label: '青岛'},
                  {value:20, label: '沈阳'},
                  {value:21, label: '宁波'},
                  {value:22, label: '昆明'}]
              },
              {
                value:23,
                label:'二线城市',
                children: [
                  {value:23, label: '无锡'},
                  {value:24, label: '佛山'},
                  {value:25, label: '合肥'},
                  {value:26, label: '大连'},
                  {value:27, label: '福州'},
                  {value:28, label: '厦门'},
                  {value:29, label: '哈尔滨'},
                  {value:30, label: '济南'},
                  {value:31, label: '温州'},
                  {value:32, label: '南宁'},
                  {value:33, label: '长春'},
                  {value:34, label: '泉州'},
                  {value:35, label: '石家庄'},
                  {value:36, label: '贵阳'},
                  {value:37, label: '常州'},
                  {value:38, label: '南通'},
                  {value:38, label: '嘉兴'},
                  {value:40, label: '太原'},
                  {value:41, label: '徐州'},
                  {value:42, label: '南昌'},
                  {value:43, label: '金华'},
                  {value:44, label: '惠州'},
                  {value:45, label: '珠海'},
                  {value:46, label: '中山'},
                  {value:47, label: '台州'},
                  {value:48, label: '烟台'},
                  {value:49, label: '兰州'},
                  {value:50, label: '绍兴'},
                  {value:51, label: '海口'},
                  {value:52, label: '扬州'}]
              },
              {
                value:53,
                label:'三线城市',
                children:[
                  {value:54, label: '汕头'},
                  {value:55, label: '湖州'},
                  {value:56, label: '盐城'},
                  {value:57, label: '潍坊'},
                  {value:58, label: '保定'}]
              },
              {
                value:59,
                label:'四线城市',
                children:[
                  {value:60, label: '韶关'},
                  {value:61, label: '常德'},
                  {value:62, label: '六安'},
                  {value:63, label: '汕尾'},
                  {value:64, label: '西宁'}]
              },
              {
                value:65,
                label:'五线及其他城市',
                children:[
                  {value:65, label: '汉中'},
                  {value:66, label: '辽阳'},
                  {value:67, label: '梧州'},
                  {value:68, label: '鹰潭'},
                  {value:69, label: '百色'}]
              },
            ]
          },
          {
            value: 70,
            label:'港澳台地区',
            children:[
              {value: 71,label: '香港'},
              {value: 72,label: '澳门'},
              {value: 73,label: '台湾'}]
          },
          {
            value: 74,
            label: '海外',
            children: [
              {value: 75, label: '美国'},
              {value: 76, label: '英国'},
              {value: 77, label: '法国'},
              {value: 78, label: '印度'},
              {value: 79, label: '尼泊尔'},
              {value: 80, label: '巴基斯坦'}]
          }
        ],
        list1: [
          { name: "怀孕妈妈",    id: 1 },
          { name: "金融人士",    id: 2 },
          { name: "性冷淡风格",  id: 3 },
          { name: "斜杠青年",    id: 4 },
          { name: "经常出差",   id: 5 },
          { name: "生活达人",   id: 6 },
          { name: "果粉",  id: 7 },
          { name: "IT人士",   id: 8 },
          { name: "安卓控",   id: 9 },
          { name: "短视频达人",   id: 10 },
          { name: "修图高手",  id: 11 },
          { name: "热爱旅行",   id: 12 },
          { name: "家有儿女",  id: 13 },
          { name: "老年Disco",    id: 14 },
          { name: "Y2K",   id: 15 },
          { name: "在校大学生",   id: 16 },
          { name: "程序员（媛）",  id: 17 },
          { name: "互联网大厂",   id: 18 },
          { name: "快销",   id: 19 },
          { name: "有车一族",   id: 20 },
          { name: "等等党",  id: 21 },
          { name: "留学",   id: 22 },
          { name: "吃播",  id: 23 },
          { name: "游戏高手",    id: 24 },
          { name: "基金",   id: 25 },
          { name: "生活品质",   id: 26 },
          { name: "产品经理",  id: 27 },
          { name: "关注热点",   id: 28 },
          { name: "理财人士",   id: 29 },
          { name: "有车一族",   id: 30 },
          { name: "米粉",  id: 31 },
          { name: "网红",   id: 32 },
          { name: "美剧",  id: 33 },
          { name: "视频VIP",    id: 34 },
          { name: "白嫖党",   id: 35 },
          { name: "电动汽车",   id: 36 },
          { name: "策划",  id: 37 },
          { name: "桌游爱好者",   id: 38 },
          { name: "喜欢运动",   id: 39 },
          { name: "社交动物",   id:40 }
        ],
        list2: [],
        checkboxGroup1:[],
        checkboxGroup2:[],
        checkboxGroup3:[],
        checkboxGroup4:[],
        checkboxGroup5:[],
        checkboxGroup6:[],
        checkboxGroup7:[],
        checkboxGroup8:[],
        checkboxGroup9:[],
        categories:['视频','体育','金融','育儿','教育','工具','电商'],
        logics:['或','且','不填写'],
        show_types:['push推送','开屏广告','首页Banner','搜索胶囊图'],
        input:'',
        input1:'', input2:'',
        input3:'', input4:'',
        input5:'', input6:'',
        input7:'', input8:'',
        input9:'', input10:'',
        input11:'', input12:'',
        input13:'', input14:'',
        select1:'', select2:'', select3:'', select4:'', select5:'', select6:'',
        select7:'', select8:'', select9:'', select10:'', select11:'', select12:'',
        select13:'', select14:'', select15:'', select16:'', select17:'', select18:'',
        select19:'', select20:'', select21:'', select22:'', select23:'', select24:'',
        select25:'', select26:'', select27:'', select28:'', select29:'', select30:'',
        select31:'', select32:'', select33:'', select34:'', select35:'', select36:'',
        select37:'', select38:'', select39:'', select40:'', select41:'', select42:'',
        input15:'',
        select43:'',select44:'',
      };
    },

    mounted() {
      this.$axios({
        url:this.$table2Url,
        method:'get',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=utf-8"
        }
      }).then(res => {
        if(res.status==200){
          if(res.data.code==0){
            this.table_data=res.data.data
          }else if(res.data.code==-1){
            alert("查询失败！")
          }
        }else{
          alert(res.data.msg)
        }
      })
    },

    methods: {

      click_before() {
        this.active--;
      },
      click_after(){
        this.active++;
      },
      click_finish(){
        swal({
          title: "人群包采集成功",
          text:  "人群包ID："+this.personID,
          icon:  "success",
          button: "确认",
        }).then(value=> {
          if (value = true) {
            this.active = 0;
          }
        });
      },
      min_input(){
        Min_age = this.age_min;
        this.age_value = [Min_age,Max_age];
      },
      max_input(){
        Max_age = this.age_max;
        this.age_value = [Min_age,Max_age];
      },
      slide_input(){
        Min_age = this.age_value[0];
        this.age_min = Min_age;
        Max_age = this.age_value[1];
        this.age_max = Max_age;
      },
      time_min_input(){
        Min_time = this.time_min;
        this.time_value = [Min_time,Max_time];
      },
      time_max_input(){
        Max_time = this.time_max;
        this.time_value = [Min_time,Max_time];
      },
      time_slide_input(){
        Min_time = this.time_value[0];
        this.time_min = Min_time;
        Max_time = this.time_value[1];
        this.time_max = Max_time;
      },
      close_it(name){
        var i;
        for(i=1; i<=this.list2.length;i++ ){
          if(this.list2[i-1].name == name){
            this.list2.splice(i-1, 1);
          }
        }
      },
      log: function(evt) {
        window.console.log(evt);
        this.list2 = this.unique(this.list2);
      },
      unique(arr) {
        const res = new Map();
        return arr.filter((arr) => !res.has(arr.id) && res.set(arr.id, 1));
      }
    },
  };
</script>
<style scoped>
  span.labelhead{
    font-size: 20px;
    float: left;
    margin-left: 6px;
  }
  span.innerlabel{
    font-size: 16px;
    font-weight: bold;
    float: left;
  }
  div.innerlabel{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
</style>
