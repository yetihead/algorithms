
/**
 * Simple model of number with n capacity,
 * iterable from 0 for 999(9)
 * with sum of digits on each step
 */
class Noomber {
	constructor(capacity) {
		if (!capacity) {
			throw new Error('Need capacity');
		}

		this._value = 0;

		const nextLevelCapacity = capacity - 1;
		if (nextLevelCapacity) {
			this._nextLevel = new Noomber(nextLevelCapacity);
		}
	}

	/**
	 * plus one
	 * @private
	 */
	_increment() {
		if (this._value === 9) {
			this._value = 0;
			this._nextLevel && this._nextLevel._increment();
		} else {
			this._value++;
		}
	}

	/**
	 * returns the sum of digits
	 * @returns {number}
	 * @private
	 */
	_sum() {
		return this._nextLevel
			? this._value + this._nextLevel._sum()
			: this._value;
	}

	/**
	 * Resets to 0 each level
	 */
	_reset() {
		this._value = 0;
		this._nextLevel && this._nextLevel._reset();
	}

	/**
	 * Is noomber instance in max state
	 * 999 for 3-level noomber, for example
	 */
	_isMax() {
		const selfIsMax = this._value === 9;

		return this._nextLevel
			? selfIsMax && this._nextLevel._isMax()
			: selfIsMax;
	}

	[Symbol.iterator]() {
		const instance = this;
		instance._reset();

		return {
			next() {
				const step = {
					value: instance._sum(),
					done: instance._isMax()
				};
				instance._increment();
				return step;
			}
		}
	}
};

module.exports = Noomber;
