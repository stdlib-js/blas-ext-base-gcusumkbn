<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gcusumkbn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import gcusumkbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gcusumkbn@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gcusumkbn@deno/mod.js';
```

#### gcusumkbn( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var y = [ 0.0, 0.0, 0.0 ];

gcusumkbn( x.length, 0.0, x, 1, y, 1 );
// y => [ 1.0, -1.0, 1.0 ]

x = [ 1.0, -2.0, 2.0 ];
y = [ 0.0, 0.0, 0.0 ];

gcusumkbn( x.length, 10.0, x, 1, y, 1 );
// y => [ 11.0, 9.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **y**: output [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative sum of every other element:

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

var v = gcusumkbn( 4, 0.0, x, 2, y, 1 );
// y => [ 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial arrays...
var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

gcusumkbn( 4, 0.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 4.0, 6.0, 4.0, 5.0, 0.0 ]
```

#### gcusumkbn.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var y = [ 0.0, 0.0, 0.0 ];

gcusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// y => [ 1.0, -1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to calculate the cumulative sum of every other element in the strided input array starting from the second element and to store in the last `N` elements of the strided output array starting from the last element:

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

gcusumkbn.ndarray( 4, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => [ 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   Depending on the environment, the typed versions ([`dcusum`][@stdlib/blas/ext/base/dcusum], [`scusum`][@stdlib/blas/ext/base/scusum], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import gcusumkbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gcusumkbn@deno/mod.js';

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
var y = new Float64Array( x.length );

console.log( x );
console.log( y );

gcusumkbn( x.length, 0.0, x, 1, y, -1 );
console.log( y );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dcusumkbn`][@stdlib/blas/ext/base/dcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gcusum`][@stdlib/blas/ext/base/gcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gcusumkbn2`][@stdlib/blas/ext/base/gcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/scusumkbn`][@stdlib/blas/ext/base/scusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gcusumkbn.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gcusumkbn

[test-image]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gcusumkbn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gcusumkbn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gcusumkbn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gcusumkbn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gcusumkbn/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/ext/base/dcusum]: https://github.com/stdlib-js/blas-ext-base-dcusum/tree/deno

[@stdlib/blas/ext/base/scusum]: https://github.com/stdlib-js/blas-ext-base-scusum/tree/deno

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

<!-- <related-links> -->

[@stdlib/blas/ext/base/dcusumkbn]: https://github.com/stdlib-js/blas-ext-base-dcusumkbn/tree/deno

[@stdlib/blas/ext/base/gcusum]: https://github.com/stdlib-js/blas-ext-base-gcusum/tree/deno

[@stdlib/blas/ext/base/gcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn2/tree/deno

[@stdlib/blas/ext/base/scusumkbn]: https://github.com/stdlib-js/blas-ext-base-scusumkbn/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
