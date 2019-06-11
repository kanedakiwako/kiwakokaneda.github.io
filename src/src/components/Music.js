
import React from 'react';
import { Label } from './Label'

export const Music = () => {
  return (
    <div class="post">
      <Label />
      <section id="cd">
        <div className="cdBlock cdColLA">
          <article className="kitune">
            <div className="kkCdImage">
              <img src={`${process.env.PUBLIC_URL}/assets/cakeofsea3.png`} alt="cake of sea" />
            </div>
            <div className="kkCdList">
              <dl>
                <dt>金田貴和子</dt>
                <dd>cake of sea</dd>
              </dl>
              <ul>
                <li>1.花、男爵</li>
                <li>2.世界観</li>
                <li>3.ケーキの海</li>
                <li>4.distracted</li>
                <li>5.maa bonny lad(traditional)</li>
                <li>6.long roof</li>
                <li>7.受電変電</li>
                <li>8.洪水</li>
                <li>9.elephant kitchen</li>
                <li>10.カーテンコール</li>
                <li><a href="http://www.eclipsis.gr/" target="_blank">eclipsis #2</a></li>
              </ul>
            </div>
          </article>

          <article className="kitune">
            <div className="kkCdImage">
              <img src={`${process.env.PUBLIC_URL}/assets/mountainbook.jpg`} alt="" />
            </div>
            <div className="kkCdList">
              <dl>
                <dt>金田貴和子</dt>
                <dd>mountainbook</dd>
              </dl>
              <ul>
                <li>1.mountainbook</li>
                <li>2.クマリフト</li>
                <li>3.水の交通整理</li>
                <li>4.カール</li>
                <li>5.お日さまのフォーク</li>
                <li>6.カラー・ポケット・ブック</li>
                <li>7.まちにすんだら</li>
                <li><a href="http://www.finderpoplabel.com/catalog/cvcd013.html" target="_blank">cvcd013</a></li>
              </ul>
            </div>
          </article>
        </div>

        <div className="cdBlock cdColLB">

          <article className="kitune">
            <div className="kkCdImage">
              <img src={`${process.env.PUBLIC_URL}/assets/kanedakiwako123.jpg`} alt="" />
              <span>sold out</span>
            </div>
            <div className="kkCdList">
              <dl>
                <dt>金田貴和子</dt>
                <dd>#123</dd>
              </dl>
              <ul>
                <li>disk1</li>
                <li>disk2</li>
                <li>disk3</li>
                <li>self</li>
              </ul>
            </div>
          </article>

          <article className="kitune">
            <div className="kkCdImage">
              <img src={`${process.env.PUBLIC_URL}/assets/cvcd004.jpg`} alt="" />
            </div>
            <div className="kkCdList">
              <dl>
                <dt>金田貴和子</dt>
                <dd>in their room pocket</dd>
              </dl>
              <ul>
                <li>1.volume tone</li>
                <li>2.夕方のころ</li>
                <li>3.ヘルシンキ</li>
                <li>cvcd004</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="cdBlock cdColLC">

          <article className="kitune">
            <div className="kkCdImage">
              <img src={`${process.env.PUBLIC_URL}/assets/mtr1.png`} alt="" />
              <span>sold out</span>
            </div>
            <div className="kkCdList clr">
              <dl>
                <dt>v.a</dt>
                <dd>post pop academy</dd>
              </dl>
              <ul>
                <li>燃料のないわたしたち<br />
                /金田貴和子</li>
                <li>mt1001</li>
              </ul>
            </div>
          </article>

          <article className="kitune">
            <div className="kkCdImage">
              <img src={`${process.env.PUBLIC_URL}/assets/fpcd025.jpg`} alt="" />
            </div>
            <div className="kkCdList clr">
              <dl>
                <dt>v.a</dt>
                <dd>galaxie 500 #plum</dd>
              </dl>
              <ul>
                <li>そこにいて<br />
                /金田貴和子</li>
                <li>fpcd02</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="cdBlock cdColLD">

          <article className="kitune">
            <div className="kkCdImage">
                <img src={`${process.env.PUBLIC_URL}/assets/tarot.jpg`} alt="" />
            </div>
            <div className="kkCdList">
              <dl>
                <dt>v.a</dt>
                <dd>tarotworld</dd>
              </dl>
              <ul className="eb1">
                <li>Hermit / feat.kiwako kaneda</li>
                <l>--- k7さんのトラック、「隠者」というカードで歌部分を制作しました</l>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}