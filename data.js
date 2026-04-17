const quizData = [
  {
    "id": "q1",
    "question": "你日常工作时，身体主要处于哪种状态？",
    "options": [
      { "text": "工位焊死，长时间盯着屏幕/手机处理虚拟信息", "next": "d1_digital" },
      { "text": "在真实的物理空间中来回穿梭、操作实物", "next": "p1_physical" },
      { "text": "高频和人面对面（或语音/视频）周旋、交流", "next": "c1_comm" }
    ]
  },
  {
    "id": "d1_digital",
    "question": "对着屏幕时，你的核心产出更偏向哪一类？",
    "options": [
      { "text": "文字、数据、报表、代码等'逻辑类'产出", "next": "d_logic_1" },
      { "text": "设计图、视频、音乐等'视觉/听觉类'产出", "next": "d_art_1" },
      { "text": "不用产出具体文件，主要是沟通、规划、盯进度", "next": "d_manage_1" }
    ]
  },
  {
    "id": "d_logic_1",
    "question": "你处理这些文字/数据/代码时，是否有清晰的规则、模板或SOP？",
    "options": [
      { "text": "有，基本就是照章办事，对齐格式", "next": "d_logic_rule_1" },
      { "text": "没有绝对的模板，每次都要重新梳理逻辑", "next": "d_logic_flex_1" }
    ]
  },
  {
    "id": "d_logic_rule_1",
    "question": "你的主要工作是不是：把A系统的数据/文字，按规则处理后搬运到B系统？",
    "options": [
      { "text": "是的，我就是个人肉API", "isEnd": true, "probability": 98, "comment": "极度高危：别等AI了，几年前的RPA脚本就能取代你，建议今早转型。" },
      { "text": "没这么简单，我需要对比找出异常数据", "next": "d_logic_rule_2" }
    ]
  },
  {
    "id": "d_logic_rule_2",
    "question": "找出异常后，你通常怎么处理？",
    "options": [
      { "text": "按公司规定打回重做或出具标准报告", "isEnd": true, "probability": 88, "comment": "高危：找茬和套规则是大模型最擅长的，你的护城河只剩公司的内网防火墙。" },
      { "text": "需要跨部门沟通'为什么会异常'", "next": "d_logic_rule_3" }
    ]
  },
  {
    "id": "d_logic_rule_3",
    "question": "沟通时，其他部门通常的态度是？",
    "options": [
      { "text": "很配合，马上解释清楚", "isEnd": true, "probability": 80, "comment": "偏高危：沟通成本极低，未来系统打通后，AI可以自动追溯根源。" },
      { "text": "推诿扯皮，需要我疯狂斡旋", "next": "z_politics" }
    ]
  },
  {
    "id": "d_logic_flex_1",
    "question": "你的'深度思考'主要应用于哪个领域？",
    "options": [
      { "text": "代码、IT系统、网络攻防", "next": "d_tech_1" },
      { "text": "商业决策、法务、财务等专业分析", "next": "d_ana_1" },
      { "text": "深度文字创作、公关撰稿、剧本", "next": "d_text_1" }
    ]
  },
  {
    "id": "d_tech_1",
    "question": "在IT相关工作中，你的角色偏向：",
    "options": [
      { "text": "执行层：写业务代码(CRUD)、切图、写单元测试", "next": "d_tech_coder_1" },
      { "text": "架构层：系统架构设计、底层算法建模", "next": "d_tech_arch_1" },
      { "text": "保障层：线上运维、性能调优、网络安全", "next": "d_tech_ops_1" }
    ]
  },
  {
    "id": "d_tech_coder_1",
    "question": "遇到报错或新需求时，你会使用AI编程助手（如Copilot/Cursor）吗？",
    "options": [
      { "text": "天天用，它写框架我来修补", "next": "d_tech_coder_2" },
      { "text": "极少用，纯靠自己手敲", "next": "d_tech_coder_old" }
    ]
  },
  {
    "id": "d_tech_coder_old",
    "question": "你为什么不用AI工具？",
    "options": [
      { "text": "不让用，或者懒得学", "isEnd": true, "probability": 95, "comment": "极度高危：拒绝魔法的人将被掌握魔法的人淘汰，你的效率会被AI武装的实习生吊打。" },
      { "text": "因为业务逻辑太变态，AI根本看不懂", "next": "d_tech_coder_3" }
    ]
  },
  {
    "id": "d_tech_coder_2",
    "question": "如果AI以后能瞬间把Bug修好并一键跑通，你会：",
    "options": [
      { "text": "太爽了，直接下班", "isEnd": true, "probability": 85, "comment": "高危：你正在把核心能力拱手让给AI，未来只需要懂需求的产品经理就行了。" },
      { "text": "有点慌，我必须得搞清楚它改了底层什么逻辑", "next": "d_tech_coder_3" }
    ]
  },
  {
    "id": "d_tech_coder_3",
    "question": "你的代码库里，是否存在大量别人不敢动的'祖传屎山'？",
    "options": [
      { "text": "是的，牵一发而动全身", "next": "d_tech_coder_4" },
      { "text": "没有，我们的代码非常规范干净", "isEnd": true, "probability": 70, "comment": "偏高危：越规范的代码库，AI学习和重构越容易，基层码农生存空间正在压缩。" }
    ]
  },
  {
    "id": "d_tech_coder_4",
    "question": "这些'屎山'是怎么形成的？",
    "options": [
      { "text": "历代程序员偷懒，纯技术债", "isEnd": true, "probability": 65, "comment": "中高风险：AI重构代码的能力在飞速提升，清理技术债不再是难事。" },
      { "text": "无数次奇葩业务需求和老板妥协的结果", "next": "d_tech_coder_5" }
    ]
  },
  {
    "id": "d_tech_coder_5",
    "question": "你觉得AI能理解这些奇葩的历史妥协吗？",
    "options": [
      { "text": "只要把文档和会议记录喂给它，应该能懂", "isEnd": true, "probability": 50, "comment": "中等风险：既然能被结构化记录，AI早晚能理顺。" },
      { "text": "绝对不能，很多是没记录的'人情世故'", "isEnd": true, "probability": 15, "comment": "极度安全：你是'人类奇葩行为学'的护屎使者，AI处理不了未文档化的政治妥协。" }
    ]
  },
  {
    "id": "d_tech_arch_1",
    "question": "做架构设计时，你的主要挑战是：",
    "options": [
      { "text": "学习并组合层出不穷的新开源框架", "isEnd": true, "probability": 55, "comment": "中等风险：AI对公开的技术栈和文档比你熟悉得多。" },
      { "text": "把混乱不堪的业务需求抽象成优雅的模型", "next": "d_tech_arch_2" }
    ]
  },
  {
    "id": "d_tech_arch_2",
    "question": "当你指出业务需求的逻辑漏洞时，业务方通常：",
    "options": [
      { "text": "承认错误并修改需求", "next": "d_tech_arch_3" },
      { "text": "强词夺理：'先实现再说'", "next": "d_tech_arch_4" }
    ]
  },
  {
    "id": "d_tech_arch_3",
    "question": "你的系统主要处理的是：",
    "options": [
      { "text": "内部常规管理流程或标准电商交易", "isEnd": true, "probability": 45, "comment": "中等风险：标准业务的SaaS化和智能化进程极快。" },
      { "text": "海量高并发或对延迟有极端要求的硬核场景", "isEnd": true, "probability": 10, "comment": "极度安全：在物理极限边缘的技术深水区，AI只能当助手，无法代替工程直觉。" }
    ]
  },
  {
    "id": "d_tech_arch_4",
    "question": "面对强词夺理，你是如何交付的？",
    "options": [
      { "text": "写一堆防御性的 If-Else 糊弄过去", "isEnd": true, "probability": 35, "comment": "较安全：理解并妥协于人类的非理性，是你目前的护城河。" },
      { "text": "用高超的技术手段在底层优雅地解耦", "isEnd": true, "probability": 5, "comment": "免死金牌：技术实力与业务理解的双料王者，你是AI时代最稀缺的架构大师。" }
    ]
  },
  {
    "id": "d_tech_ops_1",
    "question": "处理线上突发大故障时，你最依靠什么？",
    "options": [
      { "text": "看日志找Error，按手册重启或回滚", "isEnd": true, "probability": 75, "comment": "偏高危：AIOps（智能运维）做异常检测和自动恢复比你快得多。" },
      { "text": "直觉！立刻猜到是网络抖动还是底层库崩了", "next": "d_tech_ops_2" }
    ]
  },
  {
    "id": "d_tech_ops_2",
    "question": "这种直觉能写成操作手册传授给新人吗？",
    "options": [
      { "text": "花点时间可以写出来", "isEnd": true, "probability": 55, "comment": "中等风险：能被总结的经验，迟早会被大模型消化。" },
      { "text": "很难，那是无数次背锅换来的'肌肉记忆'", "isEnd": true, "probability": 15, "comment": "安全：高压下的极速决策和承担风险的勇气，AI学不会。" }
    ]
  },
  {
    "id": "d_ana_1",
    "question": "你的分析工作，核心围绕什么展开？",
    "options": [
      { "text": "企业合规、法务审计、税务对账", "next": "d_ana_audit_1" },
      { "text": "商业战略、投资预测、市场调研", "next": "d_ana_strat_1" },
      { "text": "医疗诊断、病情分析", "next": "d_med_1" }
    ]
  },
  {
    "id": "d_ana_audit_1",
    "question": "当你审核发现合同或账目有问题时，你需要：",
    "options": [
      { "text": "直接驳回，不给解决方案", "isEnd": true, "probability": 85, "comment": "高危：你其实是一个人肉校验机，极易被AI规则引擎替代。" },
      { "text": "帮业务方找到一个'擦边'但不违规的变通方案", "next": "d_ana_audit_2" }
    ]
  },
  {
    "id": "d_ana_audit_2",
    "question": "这种变通方案，主要考验你对什么的理解？",
    "options": [
      { "text": "千万字法律条文或财税政策的绝对熟悉", "isEnd": true, "probability": 65, "comment": "偏高危：多文档交叉对比和检索，AI远比你强大。" },
      { "text": "当地监管机构的容忍度和人情世故", "next": "d_ana_audit_3" }
    ]
  },
  {
    "id": "d_ana_audit_3",
    "question": "如果这个方案出事了，你需要去跟监管部门'喝茶求情'吗？",
    "options": [
      { "text": "不需要，全是领导去", "isEnd": true, "probability": 30, "comment": "较安全：你虽然懂潜规则，但不承担直接的政治风险。" },
      { "text": "需要，我得亲自去疏通关系", "isEnd": true, "probability": 2, "comment": "极度安全：游走在灰色地带并肉身公关，AI如果学会了这个世界就乱套了。" }
    ]
  },
  {
    "id": "d_ana_strat_1",
    "question": "老板看重你的战略分析报告，主要是因为：",
    "options": [
      { "text": "详尽的数据图表、市场调研和逻辑推演", "next": "d_ana_strat_2" },
      { "text": "你提供的独家行业情报或人脉背书", "next": "d_ana_strat_3" }
    ]
  },
  {
    "id": "d_ana_strat_2",
    "question": "如果AI能瞬间抓取全网数据画出完美的商业画布，你会：",
    "options": [
      { "text": "那我就只能给PPT调色了", "isEnd": true, "probability": 80, "comment": "高危：你只是初级数据搬运工，缺乏独立见解。" },
      { "text": "这省了我画图的时间，我可以去'揣摩老板意图'", "next": "d_ana_strat_4" }
    ]
  },
  {
    "id": "d_ana_strat_4",
    "question": "'揣摩老板意图'在你的工作中占比大吗？",
    "options": [
      { "text": "不大，老板只看客观数据", "isEnd": true, "probability": 60, "comment": "偏高危：如果只看客观真理，算法预测会越来越准。" },
      { "text": "极大，分析是为了给老板定好的计划找'数据支撑'", "isEnd": true, "probability": 20, "comment": "很安全：你其实是老板的'智囊兼情绪抚慰者'，AI无法帮老板做政治背书。" }
    ]
  },
  {
    "id": "d_ana_strat_3",
    "question": "你获取独家情报的方式是？",
    "options": [
      { "text": "买行业数据库，看高阶研报", "isEnd": true, "probability": 55, "comment": "中等风险：AI接入数据库的速度比你快。" },
      { "text": "跟行业大佬私下饭局交换利益信息", "isEnd": true, "probability": 5, "comment": "极度安全：商业社会的底层运行代码是信任与利益交换，这是不可计算的。" }
    ]
  },
  {
    "id": "d_med_1",
    "question": "看病做诊断时，你的核心动作是：",
    "options": [
      { "text": "看化验单和影像片子，寻找异常指标", "isEnd": true, "probability": 80, "comment": "高危：AI在医疗影像识别的准确率早就超过了普通医生。" },
      { "text": "不仅看指标，还要听患者口述'玄乎'的症状", "next": "d_med_2" }
    ]
  },
  {
    "id": "d_med_2",
    "question": "当患者恐惧隐瞒病史或不遵医嘱时，你会：",
    "options": [
      { "text": "不管他，按规矩开药，出事他自己担", "isEnd": true, "probability": 60, "comment": "偏高危：那你就像个没有感情的自动售药机，容易被AI取代。" },
      { "text": "像老娘舅一样苦口婆心地安抚或吓唬他", "isEnd": true, "probability": 10, "comment": "极度安全：医学不仅是科学更是人学。面对疾病时的恐惧，只有同类的温度可以治愈。" }
    ]
  },
  {
    "id": "d_text_1",
    "question": "你日常写得最多的内容类型是？",
    "options": [
      { "text": "公文、通稿、SEO软文、商品描述等实用文体", "next": "d_text_util_1" },
      { "text": "观点评论、小说、剧本、深度品牌故事等创作文体", "next": "d_text_create_1" }
    ]
  },
  {
    "id": "d_text_util_1",
    "question": "这类文章的核心要求是什么？",
    "options": [
      { "text": "格式极其规范，不能有错别字和政治错误", "isEnd": true, "probability": 85, "comment": "高危：AI最擅长模仿体制内八股文，只要投喂了素材，绝不出错。" },
      { "text": "必须抓人眼球，能带来点击率和转化", "next": "d_text_util_2" }
    ]
  },
  {
    "id": "d_text_util_2",
    "question": "为了追求爆款，你的主要套路是？",
    "options": [
      { "text": "抓热点，疯狂洗稿，套用爆款句式", "isEnd": true, "probability": 92, "comment": "极度高危：别挣扎了，AI就是宇宙最强洗稿机器，流水线造梗它最拿手。" },
      { "text": "极其刁钻的配图、阴阳怪气的抽象讽刺", "isEnd": true, "probability": 35, "comment": "较安全：由于安全对齐和道德审查，AI目前还不太懂人类莫名其妙的抽象幽默。" }
    ]
  },
  {
    "id": "d_text_create_1",
    "question": "深度创作中，你最痛苦的环节是：",
    "options": [
      { "text": "搜集资料，搭建故事大纲，填满框架", "next": "d_text_create_2" },
      { "text": "找到能直击灵魂、让人流泪的情感共鸣点", "next": "d_text_create_3" }
    ]
  },
  {
    "id": "d_text_create_2",
    "question": "如果AI帮你写好了大纲和草稿，你的工作：",
    "options": [
      { "text": "基本只剩审稿和改错别字了", "isEnd": true, "probability": 75, "comment": "高危：你其实是在做文字苦力，核心壁垒正在崩塌。" },
      { "text": "我得全部推翻重写，它完全没有我的文风", "isEnd": true, "probability": 45, "comment": "中等风险：品味还在，但要小心AI很快会学会克隆你的独特文风。" }
    ]
  },
  {
    "id": "d_text_create_3",
    "question": "你深层洞察的灵感来源是？",
    "options": [
      { "text": "看大量经典名著、爆款电影进行解构", "isEnd": true, "probability": 60, "comment": "偏高危：AI吸收的经典作品比你多几百万倍，它也能玩重组。" },
      { "text": "我自己的童年创伤、深夜痛哭或对死亡的恐惧", "isEnd": true, "probability": 2, "comment": "绝对安全：这是人类最后的防线。AI没有肉体，永远无法体会饥饿、流血和爱。" }
    ]
  },
  {
    "id": "d_art_1",
    "question": "在视觉/音频创作中，你处于哪个环节？",
    "options": [
      { "text": "执行层：修图、抠像、排版、基础剪辑、套模板", "next": "d_art_exec_1" },
      { "text": "概念层：美术指导、导演、原创作曲、主视觉设定", "next": "d_art_concept_1" }
    ]
  },
  {
    "id": "d_art_exec_1",
    "question": "面对甲方无理的修改要求（如'五彩斑斓的黑'），你通常：",
    "options": [
      { "text": "绝望地熬夜，一张张改，一帧帧调", "isEnd": true, "probability": 90, "comment": "极度高危：Midjourney和Sora能瞬间出100个版本，你拿什么卷？" },
      { "text": "直接去甲方公司，面对面忽悠他们接受", "next": "d_art_exec_2" }
    ]
  },
  {
    "id": "d_art_exec_2",
    "question": "忽悠甲方时，你最常用的话术是：",
    "options": [
      { "text": "讲一堆高深的设计专业术语把对方绕晕", "isEnd": true, "probability": 65, "comment": "偏高危：现在的甲方也会用AI查术语和出参考图了。" },
      { "text": "察觉甲方老板的喜好，把设计跟他的面子强行绑定", "isEnd": true, "probability": 25, "comment": "安全：搞定人比搞定图重要，你其实是个会设计的高级心理按摩师。" }
    ]
  },
  {
    "id": "d_art_concept_1",
    "question": "构思原创概念时，你用AI辅助吗？",
    "options": [
      { "text": "经常用AI生成参考图找灵感", "next": "d_art_concept_2" },
      { "text": "从不用，完全依赖自己在真实世界的采风", "next": "d_art_concept_3" }
    ]
  },
  {
    "id": "d_art_concept_2",
    "question": "当AI随机生成的图比你苦思冥想的还要惊艳时，你觉得：",
    "options": [
      { "text": "很崩溃，才华被按在地上摩擦", "isEnd": true, "probability": 70, "comment": "风险极高：既然你和甲方的审美都能被AI轻易满足，你的岗位就危险了。" },
      { "text": "很兴奋，直接拿来当素材融合出更绝妙的作品", "isEnd": true, "probability": 30, "comment": "较安全：把AI当画笔而不是对手，优秀的审美驾驭能力是你的护城河。" }
    ]
  },
  {
    "id": "d_art_concept_3",
    "question": "你不看参考图做出来的作品，容易引发什么评价？",
    "options": [
      { "text": "大众觉得挺好看，很符合主流审美", "isEnd": true, "probability": 50, "comment": "中等风险：大众平均审美高度同质化，很容易被数据化和模型化。" },
      { "text": "大部分人看不懂，极小部分人深受震撼奉为神作", "isEnd": true, "probability": 8, "comment": "极度安全：你探索的是人类潜意识的边缘，创造新审美。AI拟合过去，你定义未来。" }
    ]
  },
  {
    "id": "d_manage_1",
    "question": "你不产出具体文件，那你的核心价值是？",
    "options": [
      { "text": "作为项目经理(PM)/行政协调资源、推进进度", "next": "d_manage_pm_1" },
      { "text": "作为领导做业务决策、画大饼、平息纷争", "next": "d_manage_lead_1" }
    ]
  },
  {
    "id": "d_manage_pm_1",
    "question": "你推进进度时，最讨厌的情况是？",
    "options": [
      { "text": "会议太多，表格到处飞，找不到文档", "isEnd": true, "probability": 80, "comment": "高危：AI会议纪要、Agent自动同步表格，很快就会取代人肉路由器。" },
      { "text": "遇到不看消息、疯狂推诿的职场老油条", "next": "d_manage_pm_2" }
    ]
  },
  {
    "id": "d_manage_pm_2",
    "question": "对付老油条，你的绝招是？",
    "options": [
      { "text": "在工作群里@他的领导，用流程压死他", "isEnd": true, "probability": 40, "comment": "较安全：你深谙职场权力运作，超越了单纯的工具边界。" },
      { "text": "私下请他喝咖啡动之以情，或利益互换", "isEnd": true, "probability": 15, "comment": "非常安全：能动用高超的社交情商化解人际摩擦，你是组织不可或缺的润滑剂。" }
    ]
  },
  {
    "id": "d_manage_lead_1",
    "question": "如果明天上线一个AI系统，能完美监控所有人进度并自动排期，你的团队会：",
    "options": [
      { "text": "效率起飞，现在大家经常不知道自己该干啥", "isEnd": true, "probability": 75, "comment": "高危：你是个被异化为工具的中层，本质上在做机器的数据分发工作。" },
      { "text": "瞬间崩溃离职，因为人是需要摸鱼的", "next": "d_manage_lead_2" }
    ]
  },
  {
    "id": "d_manage_lead_2",
    "question": "在跨部门'抢资源'或'甩锅'时，你的必杀技是？",
    "options": [
      { "text": "用完美的数据和严密的逻辑说服对方", "isEnd": true, "probability": 50, "comment": "中等风险：论数据博弈，AI最拿手。" },
      { "text": "拍桌子耍流氓，或动用私人交情让他'给个面子'", "next": "z_politics" }
    ]
  },
  {
    "id": "c1_comm",
    "question": "你在沟通中，扮演的主要角色是？",
    "options": [
      { "text": "外部搞钱（销售、商务BD、公关）", "next": "c_sales_1" },
      { "text": "内部管人/文化（HR、政工干部）", "next": "c_hr_1" },
      { "text": "教育与心理干预（教师、心理医生、社工）", "next": "c_guide_1" }
    ]
  },
  {
    "id": "c_sales_1",
    "question": "你的成单周期通常有多长？",
    "options": [
      { "text": "很短，几分钟到几天（ToC快消、简单电销、客服）", "next": "c_sales_fast" },
      { "text": "很长，几个月甚至几年（ToB大客、大型设备采购）", "next": "c_sales_slow" }
    ]
  },
  {
    "id": "c_sales_fast",
    "question": "你促成交易或解决问题的主要手段是？",
    "options": [
      { "text": "拼命打电话、发传单、念固定话术", "isEnd": true, "probability": 88, "comment": "极度高危：AI外呼机器人和智能客服已经抢走了大部分工作。" },
      { "text": "靠极强的个人魅力、幽默感和现场情绪感染", "isEnd": true, "probability": 35, "comment": "较安全：虽然有数字人直播，但真实的'饭圈效应'和即兴幽默依然需要真人类。" }
    ]
  },
  {
    "id": "c_sales_slow",
    "question": "在漫长的跟进中，哪一环绝对不可替代？",
    "options": [
      { "text": "做完美的PPT、写极其详尽的方案报价", "isEnd": true, "probability": 60, "comment": "偏高危：写方案是AI的强项，你必须向建立信任的维度转型。" },
      { "text": "线下饭局、了解客户私下偏好、构建利益共同体", "next": "c_sales_deep" }
    ]
  },
  {
    "id": "c_sales_deep",
    "question": "为了维护高价值私交，你通常付出什么？",
    "options": [
      { "text": "记住生日按时发祝福送礼物", "isEnd": true, "probability": 45, "comment": "中等风险：太程序化了，AI助理也能自动查日历下单。" },
      { "text": "帮他解决极其隐秘的私事，甚至牵涉灰色地带", "next": "z_politics" }
    ]
  },
  {
    "id": "c_hr_1",
    "question": "作为HR，你最耗费精力的环节是：",
    "options": [
      { "text": "海选简历、安排面试时间、算考勤薪酬", "isEnd": true, "probability": 88, "comment": "高危：AI简历筛选和自动化排程系统已经快把这些活干绝了。" },
      { "text": "深度面试定级、或跟要被裁的员工进行'艰难对话'", "next": "c_hr_2" }
    ]
  },
  {
    "id": "c_hr_2",
    "question": "在进行'裁员对话'时，你觉得你的作用是：",
    "options": [
      { "text": "面无表情宣读法定赔偿条款，走流程", "isEnd": true, "probability": 60, "comment": "偏高危：AI数字人也能面无表情宣读条款并提供电子签。" },
      { "text": "承受员工的情绪崩溃甚至谩骂，极力安抚", "next": "c_hr_3" }
    ]
  },
  {
    "id": "c_hr_3",
    "question": "被员工指着鼻子骂时，你的内心：",
    "options": [
      { "text": "毫无波澜，我只是个没感情的杀手", "isEnd": true, "probability": 40, "comment": "较安全：虽然冷酷，但公司就是需要你这样的物理防火墙隔离矛盾。" },
      { "text": "内心愧疚，尽力帮他们多申请补偿", "isEnd": true, "probability": 10, "comment": "极度安全：在冰冷的商业规则上保留人性的悲悯，这是AI无法取代的'人味儿'。" }
    ]
  },
  {
    "id": "c_guide_1",
    "question": "你的受众找你，主要是为了：",
    "options": [
      { "text": "获取硬核知识、考证通关、学软件", "next": "c_guide_info" },
      { "text": "倾诉痛苦、寻找人生意义、缓解极度焦虑", "next": "c_guide_emo" }
    ]
  },
  {
    "id": "c_guide_info",
    "question": "你传授知识的方式是？",
    "options": [
      { "text": "照本宣科，按标准大纲来", "isEnd": true, "probability": 80, "comment": "高危：永远耐心的AI智能家教性价比极高，单向输出的教书匠很危险。" },
      { "text": "察言观色，用不同比喻让不同人听懂，还要连哄带骗逼他们学", "isEnd": true, "probability": 25, "comment": "较安全：克服人类惰性所需的'因材施教'与'情绪威慑'，依然需要真实的肉体。" }
    ]
  },
  {
    "id": "c_guide_emo",
    "question": "如果你在干预时完全不讲大道理，只是倾听共情，效果好吗？",
    "options": [
      { "text": "不行，客户觉得没听到干货", "isEnd": true, "probability": 50, "comment": "中等风险：如果只想要方法论，情感陪伴大模型已经能提供高水平的回复了。" },
      { "text": "极好，很多时候客户仅仅是因为'有个真人在陪我哭'就被治愈了", "isEnd": true, "probability": 1, "comment": "最高免死金牌：治愈的本质是两颗真实跳动的心脏产生共鸣，这是硅基芯片跨不过的鸿沟。" }
    ]
  },
  {
    "id": "p1_physical",
    "question": "你的物理工作环境主要是哪一种？",
    "options": [
      { "text": "相对封闭可控的标准化环境（工厂流水线、标准仓储）", "next": "p_std_1" },
      { "text": "完全开放不可控的复杂社会环境（大街上、客户家中、事故现场）", "next": "p_unstd_1" },
      { "text": "和广袤的大自然打交道（农业、林业、矿业）", "next": "p_nature_1" }
    ]
  },
  {
    "id": "p_std_1",
    "question": "在这个固定环境中，你的主要动作是：",
    "options": [
      { "text": "重复性的大幅度搬运或初级组装", "next": "p_std_2" },
      { "text": "需要极高精度的手眼协调（高级焊工、精密挑瑕疵）", "next": "p_std_3" }
    ]
  },
  {
    "id": "p_std_2",
    "question": "这些重复动作中，你需要经常判断物品的物理属性吗？",
    "options": [
      { "text": "几乎不用，全是标准刚性件，闭眼也能抓", "isEnd": true, "probability": 95, "comment": "极度高危：工业机器人比你快，还不要五险一金。" },
      { "text": "需要，经常处理柔软布料、易碎品或缠绕的线缆", "next": "p_std_4" }
    ]
  },
  {
    "id": "p_std_4",
    "question": "如果引入识别复杂材料的机器臂，它最容易在哪崩溃？",
    "options": [
      { "text": "视觉识别不出奇形怪状的物品头尾", "isEnd": true, "probability": 60, "comment": "偏高危：多模态视觉大模型识别能力已超越人眼。" },
      { "text": "掌握不好力道容易捏碎，缺乏'触觉直觉'", "isEnd": true, "probability": 30, "comment": "较安全：柔性抓取和复杂的物理直觉是具身智能目前的巨大难题。" }
    ]
  },
  {
    "id": "p_std_3",
    "question": "你这项高精度的手艺，稀缺度如何？",
    "options": [
      { "text": "报个培训班练几个月就能上岗", "isEnd": true, "probability": 65, "comment": "偏高危：你正在被数据化，标准化动作很快会变成机器的训练集。" },
      { "text": "全凭十年经验积累，差之毫厘谬以千里", "next": "p_std_5" }
    ]
  },
  {
    "id": "p_std_5",
    "question": "这种经验最核心的体现是？",
    "options": [
      { "text": "对无数故障代码和仪器参数的死记硬背", "isEnd": true, "probability": 50, "comment": "中等风险：和拥有全人类知识库的机器拼死记硬背？" },
      { "text": "对每次细微材质差异的反馈，实时微调手部力度", "isEnd": true, "probability": 10, "comment": "极度安全：'手脑眼'的极限微秒级闭环配合，你是物理世界的艺术大师。" }
    ]
  },
  {
    "id": "p_nature_1",
    "question": "在大自然中作业时，主要任务是：",
    "options": [
      { "text": "驾驶大型农机播种收割、定点喷洒", "next": "p_nature_2" },
      { "text": "观察作物长势、判断病虫害、寻找野生动植物", "next": "p_nature_3" }
    ]
  },
  {
    "id": "p_nature_2",
    "question": "你的作业路径有规律吗？",
    "options": [
      { "text": "非常有规律，大平原上GPS定位就能跑", "isEnd": true, "probability": 85, "comment": "高危：无人驾驶拖拉机和无人机已经是成熟的大规模商业产品。" },
      { "text": "毫无规律，梯田极度崎岖，土质松软经常塌陷", "isEnd": true, "probability": 30, "comment": "较安全：非结构化极端物理环境是大型机器人的噩梦。" }
    ]
  },
  {
    "id": "p_nature_3",
    "question": "你判断长势或位置主要靠什么？",
    "options": [
      { "text": "看叶子颜色、化验土壤成分", "isEnd": true, "probability": 60, "comment": "偏高危：多光谱摄像头加AI图像识别比肉眼精准得多。" },
      { "text": "看天象、闻泥土味道、加上祖传直觉", "isEnd": true, "probability": 15, "comment": "极度安全：'老天爷赏饭吃'的多维复合直觉，数字生命目前参不透。" }
    ]
  },
  {
    "id": "p_unstd_1",
    "question": "在不可控的开放环境里，你的核心工作是：",
    "options": [
      { "text": "移动/驾驶/物流配送（外卖、网约车、货运）", "next": "p_move_1" },
      { "text": "现场施工/勘探/抢修维护（水电工、建筑工人）", "next": "p_build_1" },
      { "text": "近距离面对面服务或安防（美发师、护工、警察）", "next": "p_care_1" }
    ]
  },
  {
    "id": "p_move_1",
    "question": "你的移动路线主要集中在：",
    "options": [
      { "text": "封闭高速、城市主干道或封闭园区", "next": "p_move_2" },
      { "text": "城中村的九曲十八弯、老破小楼道", "next": "p_move_3" }
    ]
  },
  {
    "id": "p_move_2",
    "question": "在主干道驾驶时，你的工作还包括？",
    "options": [
      { "text": "什么都不包括，就是把人和物从A运到B", "isEnd": true, "probability": 85, "comment": "高危：自动驾驶和Robotaxi已在多城常态化运营。" },
      { "text": "需要和乘客聊天解闷或帮搬重物", "isEnd": true, "probability": 45, "comment": "中等风险：方向盘会被剥夺，你以后是个随车情绪安抚员。" }
    ]
  },
  {
    "id": "p_move_3",
    "question": "极其复杂的末端环境，无人机或机器狗能代替你送货上门吗？",
    "options": [
      { "text": "能，只要客户走到指定空旷处取货", "isEnd": true, "probability": 60, "comment": "偏高危：物流基础设施升级正在消除'最后一百米'障碍。" },
      { "text": "不能，它们对付不了冲出来的恶犬和大爷的手势", "isEnd": true, "probability": 15, "comment": "极度安全：物理世界的杂乱无章和突发事件是你的终极壁垒。" }
    ]
  },
  {
    "id": "p_build_1",
    "question": "到达施工/抢修现场，最头疼的情况是：",
    "options": [
      { "text": "天气太恶劣不想干活", "isEnd": true, "probability": 70, "comment": "偏高危：机器人不怕极端天气，特种作业机器人正在接管危险工种。" },
      { "text": "图纸完全对不上，前任留下一团乱麻", "next": "p_build_2" }
    ]
  },
  {
    "id": "p_build_2",
    "question": "怎么排查这种没图纸的烂摊子？",
    "options": [
      { "text": "按手册用仪器一个节点一个节点测", "isEnd": true, "probability": 45, "comment": "中等风险：便携式检测机器人的穷举测试速度比你快。" },
      { "text": "闻烧焦味，听水声，凭经验直接钻进去定位", "isEnd": true, "probability": 5, "comment": "免死金牌：嗅听触融合的多模态直觉感知+极高自由度物理干预，这是当今科技的神之禁区。" }
    ]
  },
  {
    "id": "p_care_1",
    "question": "面对面服务/安防中，客户通常需要你提供什么？",
    "options": [
      { "text": "极高的效率、快进快出（快剪、收银、洗车）", "next": "p_care_fast" },
      { "text": "情绪价值、深度信任（重症护工、高级美容）", "next": "p_care_deep" },
      { "text": "威慑与安全保障（保安、警察、急救）", "next": "p_care_sec" }
    ]
  },
  {
    "id": "p_care_fast",
    "question": "追求快的时候，还需要语言交流吗？",
    "options": [
      { "text": "完全不用，双方闭嘴弄完走人", "isEnd": true, "probability": 88, "comment": "极度高危：无人理发舱和自助终端最喜欢没有灵魂的交易。" },
      { "text": "需要，老板逼着我们疯狂推销办卡", "isEnd": true, "probability": 75, "comment": "高危：精准的算法推荐早取代了这种令人厌恶的硬核推销。" }
    ]
  },
  {
    "id": "p_care_deep",
    "question": "遇到情绪极其崩溃的顾客，你会怎么应对？",
    "options": [
      { "text": "强颜欢笑像复读机一样念欢迎词", "isEnd": true, "probability": 55, "comment": "中等风险：当你主动把自己异化成机器时，被真机器取代也就顺理成章了。" },
      { "text": "偶尔展露疲态，真实地跟顾客抱怨两句", "isEnd": true, "probability": 15, "comment": "极度安全：人类之间互相展示的脆弱，建立了机器无法伪装的真实羁绊。" }
    ]
  },
  {
    "id": "p_care_sec",
    "question": "面对冲突或危险分子时，核心挑战是：",
    "options": [
      { "text": "按战术动作制服目标", "isEnd": true, "probability": 50, "comment": "中等风险：机器狗已经学会翻跟头开门，特种防暴机器人入场是时间问题。" },
      { "text": "判断一个形迹可疑的人到底是不是坏人", "next": "p_care_sec_2" }
    ]
  },
  {
    "id": "p_care_sec_2",
    "question": "判断危险性，你凭什么？",
    "options": [
      { "text": "对比他的体貌特征和通缉令", "isEnd": true, "probability": 65, "comment": "偏高危：人脸识别和步态分析比肉眼厉害一万倍。" },
      { "text": "看他的眼神微表情，听他语气的颤抖和我的直觉", "isEnd": true, "probability": 10, "comment": "极度安全：生死压力下对同类意图的直觉预判，是千万年进化的底色，机器学不会。" }
    ]
  },
  {
    "id": "z_politics",
    "question": "面对错综复杂的利益纠葛和权力游戏，你最强大的武器是？",
    "options": [
      { "text": "无懈可击的数据分析和绝对理性", "next": "z_politics_logic" },
      { "text": "深谙人性的厚黑学、请客喝酒与情绪价值", "next": "z_politics_human" }
    ]
  },
  {
    "id": "z_politics_logic",
    "question": "只要你逻辑对数据好，别人就会听你的吗？",
    "options": [
      { "text": "是的，公司文化非常透明理智", "isEnd": true, "probability": 65, "comment": "身处理想但危险的环境：只拼数据和理性，AI永远是最完美的计算器。" },
      { "text": "当然不是，还得靠站队或找老板拍板", "next": "z_politics_human" }
    ]
  },
  {
    "id": "z_politics_human",
    "question": "搞定'人情世故'，能带来重大收益吗？",
    "options": [
      { "text": "不能，纯粹是内耗，身心俱疲", "isEnd": true, "probability": 45, "comment": "低效的内耗迟早会被淘汰，老板早晚引入AI强制推行标准化。" },
      { "text": "能，真正的商业大单和核心资源就是这么谈下来的", "isEnd": true, "probability": 3, "comment": "绝对的高端局！只要人类还有贪婪嫉妒爱面子的劣根性，就需要权谋大师。AI太清澈玩不转。" }
    ]
  }
];
