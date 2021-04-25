<template>
	<view class="content">
		<view class="row" v-for="(row, i) in maps" :key="'row-' + i">
			<view v-for="(col, j) in row" :key="'col-' + j">
				<view v-bind:class="{black: maps[i][j] == 1, white: maps[i][j] == 0}"></view>
			</view>
		</view>
		<view class="memu">
			<view class="row">
				<button @tap="init()">◎</button>
				<button @tap="turn('top')">↑</button>
				<button @tap="stop()">=</button>
			</view>
			<view class="row">
				<button @tap="turn('left')">←</button>
				<button @tap="turn('bottom')">↓</button>
				<button @tap="turn('right')">→</button>
			</view>
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
				windowWidth: 0,
				windowHeight: 0,
				game_over: false,
				top: [-1, 0],
				right: [0, 1],
				bottom: [1, 0],
				left: [0, -1],
				next: [-1, 0],
				current: 'top',
				timer: null,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:  res => {
					this.windowWidth = res.windowWidth;
					this.windowHeight = res.windowHeight;
				}
			})

			this.init();
		},
		methods: {
			init() {
				this.initMap();
				this.initSnake();
				this.initFoods();
				this.play();
			},
			
			stop() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				} else {
					this.play();
				}
			},
			
			initMap() {
				this.maps = [];
				this.game_over = false;
				this.width = Math.floor(this.windowWidth / 10);
				this.height = Math.floor(this.windowHeight * 0.8 / 10);
				
				let row, value = [[], 0];
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
			
			initSnake() {
				this.snake = [];
				let x = Math.floor(this.height / 2);
				let y = Math.floor(this.width / 2);
				this.maps[x][y] = 1;
				this.snake.unshift([x, y]);
				
				let [i, j] = this.next;
				this.maps[x + i][y + j] = 1;
				this.snake.unshift([x + i, y + j]);
			},
			
			goNext() {
				let [i, j] = this.next;
				let [x, y] = this.snake[0];
				let [row, col] = [x + i, y + j];
				if	(row == 0 
				|| row == this.height - 1 
				|| col == 0 
				|| col == this.width -1 
				|| this.snake.includes([row, col])) {
					this.game_over = true;
					clearInterval(this.timer);
				} else {
					this.snake.unshift([row, col]);
					if	(this.maps[row][col] == 0) {
						this.maps[row][col] = 1;
						let [lastX, lastY] = this.snake.pop();
						this.maps[lastX][lastY] = 0;
					} else {
						this.initFoods();
					}
				}
				this.$forceUpdate();
			},
			
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
			
			play() {
				clearInterval(this.timer);
				this.timer = setInterval(() => {
					this.goNext();
				}, 100);
			},
			
			turn(type) {
				switch(type) {
					case 'top':
					case 'bottom':
						if	(this.current == 'top' || this.current == 'bottom') {
							return;
						}
						break;
					case 'left':
					case 'right':
						if	(this.current == 'left' || this.current == 'right') {
							return;
						}
						break;
				}
				
				this.current = type;
				this.next = eval('this.' + type);
				this.play();
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
	
	.black {
		width: 15upx;
		height: 15upx;
		margin-top: 5upx;
		margin-right: 5upx;
		background-color: #555555;
	}
	
	.white {
		width: 15upx;
		height: 15upx;
		margin-top: 5upx;
		margin-right: 5upx;
		background-color: #F1F1F1;
	}
	
	button {
		width: 100upx;
		height: 100upx;
		margin-top: 10upx;
		margin-left: 10upx;
	}
</style>
