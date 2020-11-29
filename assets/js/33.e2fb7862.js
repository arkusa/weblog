(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{387:function(t,e,s){"use strict";s.r(e);var a=s(42),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" THEME")]),t._v(" "),s("p",[t._v("tmux的主题基本是指"),s("strong",[t._v("状态栏")]),t._v("的配置")]),t._v(" "),s("p",[t._v("本人"),s("strong",[t._v("tmux")]),t._v("小白")]),t._v(" "),s("p",[t._v("我的配置是基于"),s("a",{attrs:{href:"https://github.com/gpakosz/.tmux",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oh My Tmux!!!"),s("OutboundLink")],1),t._v("更改的")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgs/tmux/tmux.example.png",alt:"my example"}})]),t._v(" "),s("h2",{attrs:{id:"oh-my-tmux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-tmux"}},[t._v("#")]),t._v(" Oh My Tmux")]),t._v(" "),s("p",[t._v("如果你不想阅读tmux手册, 且想拥有向上面一样漂亮的"),s("strong",[t._v("status bar")]),t._v("的话, "),s("strong",[t._v("Oh My Tmux")]),t._v("是一个很好的选择")]),t._v(" "),s("p",[s("strong",[t._v("Oh My Tmux")]),t._v("是"),s("strong",[t._v("gpakosz")]),t._v("的"),s("strong",[t._v("tmux")]),t._v("配置, 我这里主要应用了"),s("strong",[t._v("status bar")]),t._v("的配置("),s("code",[t._v(".tmux.conf.local")]),t._v(")")]),t._v(" "),s("p",[t._v("对于其他相关内容的配置, 我计划是了解"),s("strong",[t._v("tmux")]),t._v("功能后按照自己的习惯更改")]),t._v(" "),s("h3",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/gpakosz/.tmux.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s -f .tmux/.tmux.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" .tmux/.tmux.conf.local "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("这里"),s("code",[t._v("ln -s -f .tmux/.tmux.conf")]),t._v("将"),s("code",[t._v("~/.tmux.conf")]),t._v("软链到了"),s("code",[t._v("~/.tmux/.tmux.conf")]),t._v("上")]),t._v(" "),s("p",[t._v("所以如果你有"),s("code",[t._v("tmux.conf")]),t._v("配置的话, 记得备份😯 !")])]),t._v(" "),s("h3",{attrs:{id:"status-bar-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-bar-conf"}},[t._v("#")]),t._v(" Status Bar Conf")]),t._v(" "),s("p",[t._v("tmux_conf_theme_status_left='  🐷 #S  |  ⌚️ #{?uptime_y, #{uptime_y}y,}#{?uptime_d, #{uptime_d}d,}#{?uptime_h, #{uptime_h}h,}#{?uptime_m, #{uptime_m}m,}  '\ntmux_conf_theme_status_right='#{prefix}#{pairing}#{synchronized} #{?battery_status, #{battery_status},}#{?battery_bar, #{battery_bar},}#{?battery_percentage, #{battery_percentage},} , %R , %b %d |        临渊羡鱼不如退而结网     |    askura ♥    '")]),t._v(" "),s("h1",{attrs:{id:"status-left-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-left-style"}},[t._v("#")]),t._v(" status left style")]),t._v(" "),s("p",[t._v("tmux_conf_theme_status_left_fg='#000000,#e4e4e4'  # black, white , white\ntmux_conf_theme_status_left_bg='#ffff00,#ff00af,#FF8C00'  # yellow, pink, white blue\ntmux_conf_theme_status_left_attr='bold,none,none'")]),t._v(" "),s("h1",{attrs:{id:"status-right-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-right-style"}},[t._v("#")]),t._v(" status right style")]),t._v(" "),s("p",[t._v("tmux_conf_theme_status_right_fg='#8a8a8a,#e4e4e4,#000000' # light gray, white, black\ntmux_conf_theme_status_right_bg='#080808,#6FB668,#e4e4e4' # dark gray, red, white\ntmux_conf_theme_status_right_attr='none,none,bold'")]),t._v(" "),s("p",[t._v("tmux_conf_theme_left_separator_main='\\uE0B0'  # /!\\ you don't need to install Powerline\ntmux_conf_theme_left_separator_sub='\\uE0B1'   #   you only need fonts patched with\ntmux_conf_theme_right_separator_main='\\uE0B2' #   Powerline symbols or the standalone\ntmux_conf_theme_right_separator_sub='\\uE0B3'  #   PowerlineSymbols.otf font, see README.md")]),t._v(" "),s("p",[t._v("tmux_conf_battery_status_charging='🔌'     # U+1F50C\ntmux_conf_battery_status_discharging='🔋'  # U+1F50B")]),t._v(" "),s("p",[t._v("tmux_conf_battery_bar_symbol_full='♥'\ntmux_conf_battery_bar_symbol_empty='·'")])])}),[],!1,null,null,null);e.default=_.exports}}]);