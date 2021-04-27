<template>
	<view class="content">
		<view class="row" v-for="(row, i) in maps" :key="'row-' + i">
			<view v-for="(col, j) in row" :key="'col-' + j">
				<view :class="{block: true, black: maps[i][j], white: !maps[i][j]}"></view>
			</view>
		</view>
		<view class="row">
			<button @tap="init()">◎</button>
			<button @tap="turn('top')" @touchstart.prevent="speedQuick('top')"
				@touchend.prevent="speedCommon()">↑</button>
			<button @tap="stop()">=</button>
		</view>
		<view class="row">
			<button @tap="turn('left')" @touchstart.prevent="speedQuick('left')"
				@touchend.prevent="speedCommon()">←</button>
			<button @tap="turn('bottom')" @touchstart.prevent="speedQuick('bottom')"
				@touchend.prevent="speedCommon()">↓</button>
			<button @tap="turn('right')" @touchstart.prevent="speedQuick('right')"
				@touchend.prevent="speedCommon()">→</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				maps: [],
				snake: [],
				foods: [],
				width: 10,
				height: 10,
				window_width: 0,
				window_height: 0,
				game_over: false,
				direction: {
					top: [-1, 0],
					right: [0, 1],
					bottom: [1, 0],
					left: [0, -1],
				},
				next: 'top',
				timer: null,
				interval: 500,
				interval_quick: 100,
			}
		},
		onLoad() {
			// 根据屏幕大小确定地图尺寸
			uni.getSystemInfo({
				success: res => {
					this.window_width = res.windowWidth;
					this.window_height = res.windowHeight;
				}
			});

			this.init();
		},
		methods: {
			// 初始化
			init() {
				this.initMap();
				this.initSnake();
				this.initFoods();
				this.play(this.interval);
			},

			// 暂停/开始
			stop() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				} else {
					this.play(this.interval);
				}
			},

			// 初始化地图
			initMap() {
				this.maps = [];
				this.game_over = false;
				this.width = Math.floor(this.window_width / 10);
				this.height = Math.floor(this.window_height * 0.7 / 10);

				let row, value = [
					[], 0
				];
				for (let i = 0; i < this.height; i++) {
					row = [];
					for (let j = 0; j < this.width; j++) {
						value = (i == 0 || j == 0 || i == this.height - 1 || j == this.width - 1) ? 1 : 0;
						row.push(value);
						if (value == 0) {
							this.foods.push([i, j]);
						}
					}
					this.maps.push(row);
				}
			},

			// 初始化蛇
			initSnake() {
				this.snake = [];
				let x = Math.floor(this.height / 2);
				let y = Math.floor(this.width / 2);
				this.maps[x][y] = 1;
				this.maps[x - 1][y] = 1;
				this.maps[x - 2][y] = 1;
				this.snake = [
					[x - 2, y],
					[x - 1, y],
					[x, y]
				];
			},

			// 向前一步
			goNext() {
				let [i, j] = this.direction[this.next];
				let [x, y] = this.snake[0];
				let [row, col] = [x + i, y + j];
				if (row == 0 || row == this.height - 1 || col == 0 || col == this.width - 1 || this.checkSnake([row, col],
						this.snake)) {
					this.game_over = true;
					clearInterval(this.timer);
					uni.showToast({
						title: '游戏结束！',
						icon: 'none',
						duration: 1000,
					})
					return;
				} else {
					this.snake.unshift([row, col]);
					if (this.maps[row][col] == 0) {
						this.maps[row][col] = 1;
						let [lastX, lastY] = this.snake.pop();
						this.maps[lastX][lastY] = 0;
					} else {
						this.initFoods();
					}
				}
				this.$forceUpdate();
			},

			// 初始化食物
			initFoods() {
				if (this.foods.length > 0) {
					let index = parseInt(Math.random() * this.foods.length);
					let [x, y] = this.foods[index];
					this.maps[x][y] = 1;
					this.foods.splice(index, 1);
				} else {
					this.game_over = true;
				}
			},

			// 开始游戏
			play(interval) {
				clearInterval(this.timer);
				if (!this.game_over) {
					this.timer = setInterval(() => {
						this.goNext();
					}, interval);
				}
			},

			// 转向
			turn(type) {
				switch (type) {
					case 'top':
					case 'bottom':
						if (this.next == 'top' || this.next == 'bottom') {
							return;
						}
						break;
					case 'left':
					case 'right':
						if (this.next == 'left' || this.next == 'right') {
							return;
						}
						break;
				}

				this.next = type;
			},

			// 加速
			speedQuick(type) {
				this.turn(type);
				this.play(this.interval_quick);
			},

			// 恢复正常速度
			speedCommon() {
				this.play(this.interval);
			},

			checkSnake(point, arr) {
				return arr.some(item => {
					return item.join() === point.join()
				});
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.block {
		width: 8px;
		height: 8px;
		margin-top: 2px;
		margin-right: 2px;
	}

	.black {
		background-color: #555555;
	}

	.white {
		background-color: #F1F1F1;
	}

	button {
		width: 40px;
		height: 40px;
		padding: 0;
		margin: 10px 0 0 10px;
		font-size: 16px;
	}
</style>
