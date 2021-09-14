<template>
  <div>
    <pre>
        <code>
            {{ code }}
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "convex_polygon",

  data: () => ({
    code: `
        #include <bits/stdc++.h>
        using namespace std;
        #define ll long long
        const double eps = 1e-6;
        const int maxn = 1e5 + 7;
        const double pi = acos(-1);

        class point
        // 点或向量的类
        {
        public:
            double x, y;
            void read() {
                cin >> x >> y;
            }
            void print() {
                cout << x << y;
            }
            point(double _x = 0, double _y = 0) {
                x = _x, y = _y;
            };
            point operator+(const point &p) const {
                return {x + p.x, y + p.y};
            }
            point operator-(const point &p) const {
                return {x - p.x, y - p.y};
            }
            point operator*(double p) const {
                return {x * p, y * p};
            }
            point operator/(double p) const {
                return {x / p, y / p};
            }
            bool operator<(const point &b) const {
                return x < b.x || (x == b.x && y < b.y);
            }
            double operator*(const point &p) const {
                return x * p.x + y * p.y;
            }
            double len() {
                return sqrt(x * x + y * y);
            }
            double dis(const point &p) const {
                return ((*this) - p).len();
            }
            double angle() {
                return atan2(y, x);
            }
            double dot(const point &b) const {
                return x * b.x + y * b.y;
            }
            double cross(const point &b, const point &c) const {
                return (b.x - x) * (c.y - y) - (c.x - x) * (b.y - y);
            }
        };

        ll multi(point p1, point p2, point p0)
        // 叉乘
        {
            ll x1 = p1.x - p0.x;
            ll y1 = p1.y - p0.y;

            ll x2 = p2.x - p0.x;
            ll y2 = p2.y - p0.y;

            return (x1 * y2 - x2 * y1);
        }

        int pointcmp(const point &a, const point &b) {
            if (a.x != b.x)
                return (a.x < b.x);
            else
                return (a.y < b.y);
        }

        int ConvexHull(int n, point p[], point ch[])
        // 凸包，点p，输出ch，如果三点共线算凸包，那么把小于号改为小于等于号
        {
            sort(p, p + n, pointcmp);
            int m = 0;
            for (int i = 0; i < n; i++) {
                while (m > 1 && multi(ch[m - 1], p[i], ch[m - 2]) < 0)
                    m--;
                ch[m++] = p[i];
            }
            int k = m;
            for (int i = n - 2; i >= 0; i--) {
                while (m > k && multi(ch[m - 1], p[i], ch[m - 2]) < 0)
                    m--;
                ch[m++] = p[i];
            }
            if (n > 1) m--;
            return m;
        }

        point p[maxn], q[maxn];
        int main() {
            int n;
            cin >> n;
            for (int i = 0; i < n; i++) {
                p[i].read();
            }
            cout << (n == ConvexHull(n, p, q));
            return 0;
        }
    `,
  }),
};
</script>
